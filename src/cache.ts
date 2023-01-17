const MINUTES_IN_MS = 1000 * 60;

export class Cache<T = any> {
  /**
   * Cached data.
   */
  #data = new Map([]);

  /**
   * Root key of cache.
   */
  #rootKey = '_root';

  /**
   * Time life of cached data. when 0 (zero) it's expired.
   */
  #timeLife = 0;

  constructor(private readonly defaultValue?: any) {}

  get(): T | undefined {
    return this.#data.get(this.#rootKey) || this.defaultValue;
  }

  set(newValue: T): void {
    this.#data.set(this.#rootKey, newValue);
    this.#timeLife = Date.now() + (MINUTES_IN_MS * 30);
  }

  isExpired(): boolean {
    const now = Date.now();
    return now > this.#timeLife;
  }
}