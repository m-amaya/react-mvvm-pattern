import { UserProfileModel } from './UserProfile.model';

describe(UserProfileModel.name, () => {
  it('should create a default profile with user role', () => {
    const userModel = new UserProfileModel('user');

    expect(userModel.profile.value).toEqual({
      avatar: '👤',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role: 'user',
    });
  });

  it('should create a default profile with chatbot role', () => {
    const chatbotModel = new UserProfileModel('chatbot');

    expect(chatbotModel.profile.value).toEqual({
      avatar: '🤖',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role: 'chatbot',
    });
  });

  it('should set a new user name', () => {
    const userModel = new UserProfileModel('user');
    const newName = 'new-user-name';

    userModel.setProfileName(newName);

    expect(userModel.profileName.value).toBe(newName);
  });
});
