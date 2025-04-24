import { Signal } from '@preact/signals-core';
import ls from 'localstorage-slim';
import { LocalStorageKeys } from '../../constants';
import { UserProfileInterface } from '../../types';

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
