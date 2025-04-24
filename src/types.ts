export type RoleType = 'user' | 'chatbot';

export interface UserProfileInterface {
  avatar: string;
  name: string;
  role: RoleType;
}

export interface ChannelInterface {
  name: string;
  messages: ChatMessageInterface[];
}

export interface ChatMessageInterface {
  role: RoleType;
  content: string;
}
