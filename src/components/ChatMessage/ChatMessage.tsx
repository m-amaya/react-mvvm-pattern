import { ChatMessageInterface } from '../../types';
import { AvatarStyled } from '../Avatar';
import {
  ContentStyled,
  MessageStyled,
  MessageTextStyled,
  RootStyled,
  UsernameTextStyled,
} from './ChatMessage.styled';

export type ChatMessageProps = ChatMessageInterface & {
  username: string;
};

export const ChatMessage = ({ username, role, content }: ChatMessageProps) => {
  const isBot = role === 'chatbot';

  return (
    <RootStyled $isBot={isBot}>
      <ContentStyled $isBot={isBot}>
        <AvatarStyled>🤖</AvatarStyled>
        <MessageStyled $isBot={isBot}>
          <UsernameTextStyled $isBot={isBot}>{username}</UsernameTextStyled>
          <MessageTextStyled>{content}</MessageTextStyled>
        </MessageStyled>
      </ContentStyled>
    </RootStyled>
  );
};
