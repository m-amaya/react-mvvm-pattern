import { signal } from '@preact/signals-core';
import { LocalStorageKeys } from '../../constants';
import { UserProfileInterface } from '../../types';
import { setProfileNameAction } from './set-profile-name-action.util';

describe(setProfileNameAction.name, () => {
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

  afterEach(() => {
    setItemSpy.mockClear();
    localStorage.clear();
  });

  it('should set user name on signal and in local storage for user role', () => {
    const user = signal<UserProfileInterface>({
      avatar: '👤',
      name: 'old-name',
      role: 'user',
    });

    setProfileNameAction(user, 'new-name');

    expect(user.value.name).toBe('new-name');
    expect(setItemSpy).toHaveBeenCalledExactlyOnceWith(
      LocalStorageKeys.USER_NAME,
      '"new-name"'
    );
    expect(localStorage.getItem(LocalStorageKeys.USER_NAME)).toBe('"new-name"');
  });

  it('should set user name on signal and in local storage for chatbot role', () => {
    const user = signal<UserProfileInterface>({
      avatar: '🤖',
      name: 'old-name',
      role: 'chatbot',
    });

    setProfileNameAction(user, 'new-name');

    expect(user.value.name).toBe('new-name');
    expect(setItemSpy).toHaveBeenCalledExactlyOnceWith(
      LocalStorageKeys.CHATBOT_NAME,
      '"new-name"'
    );
    expect(localStorage.getItem(LocalStorageKeys.CHATBOT_NAME)).toBe(
      '"new-name"'
    );
  });
});
