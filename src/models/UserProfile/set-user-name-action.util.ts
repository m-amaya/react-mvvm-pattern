import { Signal } from '@preact/signals-core';
import ls from 'localstorage-slim';
import { LocalStorageKeys } from '../../constants';
import { UserProfileInterface } from '../../types';

export const setUserNameAction = (
  user: Signal<UserProfileInterface>,
  name: string
) => {
  const lsKey =
    user.value.role === 'user'
      ? LocalStorageKeys.USER_NAME
      : LocalStorageKeys.CHATBOT_NAME;
  ls.set(lsKey, name);
  user.value.name = name;
};
