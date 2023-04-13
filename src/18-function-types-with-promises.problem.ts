import {expect, it} from 'vitest';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}
type Props = {
  createUser: () => Promise<string>;
  getUser: (userId: string) => Promise<User>;
};

const createThenGetUser = async (createUser: Props['createUser'], getUser: Props['getUser']): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it('Should create the user, then get them', async () => {
  const user = await createThenGetUser(
    async () => '123',
    async (id) => ({
      id,
      firstName: 'Matt',
      lastName: 'Pocock',
    })
  );

  expect(user).toEqual({
    id: '123',
    firstName: 'Matt',
    lastName: 'Pocock',
  });
});
