import { useContext } from 'react';
import { useSignalValue } from '../../hooks/useSignalValue';
import { RootContext } from '../../models/Root.context';
import { UserProfileModelInterface } from '../../models/UserProfile';

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
