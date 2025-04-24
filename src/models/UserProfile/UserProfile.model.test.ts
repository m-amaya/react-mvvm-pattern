import { UserModel } from './UserProfile.model';

describe(UserModel.name, () => {
  it('should create a default profile with user role', () => {
    const userModel = new UserModel('user');

    expect(userModel.user.value).toEqual({
      avatar: '👤',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role: 'user',
    });
  });

  it('should create a default profile with chatbot role', () => {
    const userModel = new UserModel('chatbot');

    expect(userModel.user.value).toEqual({
      avatar: '🤖',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role: 'chatbot',
    });
  });

  it('should set a new user name', () => {
    const userModel = new UserModel('user');
    const newName = 'new-user-name';

    userModel.setUserName(newName);

    expect(userModel.userName.value).toBe(newName);
  });
});
