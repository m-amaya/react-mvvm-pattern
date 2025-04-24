import { createContext } from 'react';
import { UserProfileModel } from './UserProfile';

const user = new UserProfileModel('user');
const chatbot = new UserProfileModel('chatbot');

export const defaultRootContext = {
  user,
  chatbot,
};

export type RootContextInterface = typeof defaultRootContext;

export const RootContext =
  createContext<RootContextInterface>(defaultRootContext);
export const RootProvider = RootContext.Provider;
