import * as user from '../user';

jest.mock('../request');

// Handling success
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

it('works with done', done => {
  expect.assertions(1);
  user.getUserName(4).then(data => {
    expect(data).toEqual('Mark');
    done();
  });
});

it('works with async', async () => {
  expect.assertions(1);
  const userName = await user.getUserName(4);
  expect(userName).toEqual('Mark');
});

// Handling rejects
it('works with rejected promises', () => {
  expect.assertions(1);
  return user
    .getUserName(7)
    .catch(err => expect(err.error).toMatch(/not found/));
});

it('"done" works with rejected promises', done => {
  expect.assertions(1);
  user.getUserName(7).catch(err => {
    expect(err.error).toMatch(/not found/);
    done();
  });
});

it('rejected promise works with async', async () => {
  expect.assertions(1);
  try {
    await user.getUserName(7);
  } catch (err) {
    expect(err.error).toMatch(/not found/);
  }
});
