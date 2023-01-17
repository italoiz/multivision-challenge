import { enableFetchMocks } from 'jest-fetch-mock';

import { Letter as LetterClass } from '../src/letter';
import { POSTS, USERS } from './mock-data';

enableFetchMocks();

describe('Letter Class', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(req => {
      return req.url.endsWith('/users')
       ? Promise.resolve({ body: JSON.stringify(USERS) })
       : Promise.resolve({ body: JSON.stringify(POSTS) })
    })
  });

  it('should call fetch api when the `get` method was called', async () => {
    const instance = new LetterClass();
    await instance.get();
    expect(fetch).toHaveBeenCalled();
  });

  it('should call posts and users api when the `get` method was called', async () => {
    const instance = new LetterClass();
    await instance.get();
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('should use cached users when the `get` method called twice', async () => {
    const instance = new LetterClass();
    await instance.get();
    await instance.get();
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

  it('should return an empty array when requests throw errors', async () => {
    console.warn = jest.fn();
    fetchMock.mockReject(new Error('An error ocurred'));
    const instance = new LetterClass();
    const result = await instance.get();
    expect(result).toStrictEqual([]);
    (console.warn as jest.Mock).mockRestore();
  });

  it('should log erro when an error ocurrent on requests', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    fetchMock.mockReject(new Error('An error ocurred'));
    const instance = new LetterClass();
    const result = await instance.get();
    expect(result).toStrictEqual([]);
    expect(console.warn).toHaveBeenCalled();
    warnSpy.mockRestore();
  });
})