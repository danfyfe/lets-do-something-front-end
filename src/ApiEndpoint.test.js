import API_ENDPOINT from './ApiEndpoint.js'

test('returns correct endpoint', () => {
  if (process.env.NODE_ENV === 'production') {
    expect(API_ENDPOINT).toBe('https://lets-do-something-api.herokuapp.com/api/v1');
  } else {
    expect(API_ENDPOINT).toBe('http://localhost:3000/api/v1');
  }
});

