import { ChatMessagesModelInterface } from './models/ChatMessages';

export type RoleType = 'user' | 'chatbot';

export interface UserProfileInterface {
  avatar: string;
  name: string;
  role: RoleType;
}

export interface ChannelInterface {
  id: string;
  name: string;
  messages: ChatMessagesModelInterface;
}

export interface ChatMessageInterface {
  role: RoleType;
  content: string;
}
