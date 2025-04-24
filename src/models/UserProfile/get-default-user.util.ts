import ls from 'localstorage-slim';
import { generateUsername } from 'unique-username-generator';
import { LocalStorageKeys } from '../../constants';
import { RoleType, UserProfileInterface } from '../../types';

export const getDefaultUser = (role: RoleType): UserProfileInterface => {
  if (role === 'user') {
    const lsUserName = ls.get<string>(LocalStorageKeys.USER_NAME);

    return {
      avatar: '👤',
      name: lsUserName ?? generateUsername('-'),
      role: 'user',
    };
  }

  if (role === 'chatbot') {
    const lsUserName = ls.get<string>(LocalStorageKeys.CHATBOT_NAME);

    return {
      avatar: '🤖',
      name: lsUserName ?? generateUsername('-'),
      role: 'chatbot',
    };
  }

  throw new Error(`Unknown role: ${role}`);
};
