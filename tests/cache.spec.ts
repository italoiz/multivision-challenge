import { Cache as CacheClass } from '../src/cache';

describe('Cache Class', () => {
  it('should have `set`, `get` and `isExpired` methods', () => {
    const instance = new CacheClass();
    expect(instance).toHaveProperty('set');
    expect(instance).toHaveProperty('get');
    expect(instance).toHaveProperty('isExpired');
  });

  it('should return the default value when cache is empty and the default value was provided', () => {
    const defaultValue = 'my default value';
    const instance = new CacheClass(defaultValue);
    expect(instance.get()).toBe(defaultValue);
  });

  it('should return the cached value when cache is not empty', () => {
    const cachedValue = 'my default value';
    const instance = new CacheClass();
    instance.set(cachedValue);
    expect(instance.get()).toBe(cachedValue);
  });

  it('should return false on `isExpired` when cache is not expired', () => {
    jest.useFakeTimers();
    const cachedValue = 'my default value';
    const instance = new CacheClass();
    instance.set(cachedValue);
    expect(instance.isExpired()).toBe(false);
  });

  it('should return true on `isExpired` when cache is expired', () => {
    jest.useFakeTimers();
    const cachedValue = 'my default value';
    const instance = new CacheClass();
    instance.set(cachedValue);
    jest.advanceTimersByTime(1000 * 60 * 30); // advance 30 minutes
    expect(instance.isExpired()).toBe(false);
    jest.useRealTimers();
  });
})