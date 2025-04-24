import { LocalStorageKeys } from '@src/constants';
import { RoleType } from '@src/types';
import { getDefaultProfile } from './get-default-profile.util';

describe(getDefaultProfile.name, () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');

  afterEach(() => {
    getItemSpy.mockClear();
    localStorage.clear();
  });

  it('should return default profile for user role', () => {
    const role: RoleType = 'user';

    const expected = {
      avatar: '👤',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role,
    };

    const result = getDefaultProfile(role);

    expect(result).toEqual(expected);
  });

  it('should return user name from local storage if available', () => {
    const role: RoleType = 'user';
    getItemSpy.mockReturnValue('test-user-name');

    const expected = {
      avatar: '👤',
      name: 'test-user-name',
      role,
    };

    const result = getDefaultProfile(role);

    expect(result).toEqual(expected);
    expect(getItemSpy).toHaveBeenCalledExactlyOnceWith(
      LocalStorageKeys.USER_NAME
    );
    expect(localStorage.getItem(LocalStorageKeys.USER_NAME)).toBe(
      'test-user-name'
    );
  });

  it('should return default profile for chatbot role', () => {
    const role: RoleType = 'chatbot';

    const expected = {
      avatar: '🤖',
      name: expect.stringMatching(/^[a-zA-Z0-9_-]+$/),
      role,
    };

    const result = getDefaultProfile(role);

    expect(result).toEqual(expected);
  });

  it('should return chatbot name from local storage if available', () => {
    const role: RoleType = 'chatbot';
    getItemSpy.mockReturnValue('test-chatbot-name');

    const expected = {
      avatar: '🤖',
      name: 'test-chatbot-name',
      role,
    };

    const result = getDefaultProfile(role);

    expect(result).toEqual(expected);
    expect(getItemSpy).toHaveBeenCalledExactlyOnceWith(
      LocalStorageKeys.CHATBOT_NAME
    );
    expect(localStorage.getItem(LocalStorageKeys.CHATBOT_NAME)).toBe(
      'test-chatbot-name'
    );
  });
});
