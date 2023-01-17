[![Build Status](https://app.travis-ci.com/italoiz/multivision-challenge.svg?branch=main)](https://app.travis-ci.com/italoiz/multivision-challenge)
[![Coverage Status](https://coveralls.io/repos/github/italoiz/multivision-challenge/badge.svg?branch=main)](https://coveralls.io/github/italoiz/multivision-challenge?branch=main)

## Multivision Javascript Challenge

This repository belongs to the challenge of an interview requested by [Multivision](https://www.multivision.pt/).

### The Result

You can see the final result by clicking [here](http://multivision-chl.s3-website-us-east-1.amazonaws.com).

### How it's works

This project consumes the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) that provides some endpoints with a series of random results.

Here we consumed the `posts` and `users` endpoints to make a list of users with related posts. See the below example:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": "Kulas Light, Apt. 556 - 92998-3874 Gwenborough",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": "Romaguera-Crona",
    "posts": [
      {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ]
  }
]
```

### What tools and tech were used?

- Typescript - To get more consistent on development.
- Webpack - To bundle compiled typescript files.
- Jest - To create test cases.
- Travis CI - To deploy the online result on the AWS S3. Could be used the GitHub Actions instead of Travis.
- Coveralls - To track the code coverage.