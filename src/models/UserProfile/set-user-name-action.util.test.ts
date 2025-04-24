import { signal } from '@preact/signals-core';
import { LocalStorageKeys } from '../../constants';
import { UserProfileInterface } from '../../types';
import { setUserNameAction } from './set-user-name-action.util';

describe(setUserNameAction.name, () => {
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

    setUserNameAction(user, 'new-name');

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

    setUserNameAction(user, 'new-name');

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
