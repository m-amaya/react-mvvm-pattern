import { useSignalValue } from '@src/hooks/useSignalValue';
import { UserProfileModelInterface } from '@src/models/UserProfile';
import { RootContext } from '@src/Root.context';
import { useContext } from 'react';

export type NameFormViewModelInterface = {
  botName: string;
  userName: string;
  setBotName: UserProfileModelInterface['setProfileName'];
  setUserName: UserProfileModelInterface['setProfileName'];
};

export const useNameFormViewModel = (): NameFormViewModelInterface => {
  const { user, chatbot } = useContext(RootContext);

  return {
    botName: useSignalValue(chatbot.profileName),
    userName: useSignalValue(user.profileName),
    setBotName: (...args) => chatbot.setProfileName(...args),
    setUserName: (...args) => user.setProfileName(...args),
  };
};
