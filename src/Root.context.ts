import { createContext } from 'react';
import { ChannelsModel } from './models/Channels';
import { UserProfileModel } from './models/UserProfile';

const user = new UserProfileModel('user');
const chatbot = new UserProfileModel('chatbot');
const channels = new ChannelsModel();

export const defaultRootContext = {
  user,
  chatbot,
  channels,
};

export type RootContextInterface = typeof defaultRootContext;

export const RootContext =
  createContext<RootContextInterface>(defaultRootContext);
export const RootProvider = RootContext.Provider;
