import { Signal } from '@preact/signals-core';
import { LocalStorageKeys } from '@src/constants';
import { UserProfileInterface } from '@src/types';
import ls from 'localstorage-slim';

export const setProfileNameAction = (
  profile: Signal<UserProfileInterface>,
  name: string
) => {
  const lsKey =
    profile.value.role === 'user'
      ? LocalStorageKeys.USER_NAME
      : LocalStorageKeys.CHATBOT_NAME;
  ls.set(lsKey, name);
  profile.value.name = name;
};
