import { Cache } from "./cache";

type Post = {
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
  posts: Post[];
};

export class Letter {
  #users = new Cache<Map<number, User>>(new Map([]));

  async #setupUsers() {
    if (this.#users.isExpired()) {
      const map = new Map<number, any>([]);
      const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(users => {
          users.forEach((user: Record<string, any>) => {
            map.set(user.id, this.#parseUser(user))
          });
          return map;
        })
        .catch((error) => {
          console.warn(error);
          return map;
        });
      this.#users.set(users);
    }
  }

  #parseUser(user: Record<string, any>): User {
    const { id, name, username, email, phone, website, company } = user;
    const { street, suite, city, zipcode } = user.address;
    const address = `${street}, ${suite} - ${zipcode} ${city}`;
    return {
      id,
      name,
      username,
      email,
      phone,
      website,
      address,
      company: company.name,
      posts: [],
    };
  }

  #parsePost(post: Record<string, any>): Post {
    const { id, title, body } = post;
    return { id, title, body };
  }

  #groupByUsers(posts: Array<Record<string, any>>): User[] {
    const users = this.#users.get() as Map<number, User>;
    const groupedPosts = posts
      .reduce((map, post) => {
        const user = map.get(post.userId);
        const posts = [...user.posts, this.#parsePost(post)];
        map.set(post.userId, { ...user, posts });
        return map;
      }, users)
    return Array.from(groupedPosts.values());
  }

  async get(): Promise<User[]> {
    await this.#setupUsers();
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(this.#groupByUsers.bind(this))
      .catch((error) => {
        console.warn(error);
        return [];
      });
  }
}
