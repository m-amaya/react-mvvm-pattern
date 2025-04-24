import { Signal } from '@preact/signals-core';

export type RoleType = 'user' | 'chatbot';

export interface UserProfileInterface {
  avatar: string;
  name: string;
  role: RoleType;
}

export interface ChannelInterface {
  id: string;
  name: string;
  messages: Signal<ChatMessageInterface>;
}

export interface ChatMessageInterface {
  role: RoleType;
  content: string;
}
