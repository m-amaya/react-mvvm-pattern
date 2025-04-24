import { ButtonStyled } from '@src/components/Button';
import { ChatMessage } from '@src/components/ChatMessage';
import { InputStyled } from '@src/components/Input';
import {
  ChannelTitleBarStyled,
  ChatMessageBoxStyled,
  ChatWindowStyled,
  InputWrapperStyled,
  RootStyled,
  TitleTextStyled,
} from './ChannelPanel.styled';

export const ChannelPanel = () => {
  return (
    <RootStyled>
      <ChannelTitleBarStyled>
        <TitleTextStyled>#channel-name</TitleTextStyled>
        <ButtonStyled>Clear</ButtonStyled>
      </ChannelTitleBarStyled>
      <ChatWindowStyled>
        <ChatMessage
          username='mamaya'
          role='user'
          content='This is a message.'
        />
        <ChatMessage
          username='chatbot'
          role='chatbot'
          content='This is a response.'
        />
        <ChatMessage
          username='mamaya'
          role='user'
          content='This is another long inquiry.'
        />
        <ChatMessage
          username='chatbot'
          role='chatbot'
          content='This is a long response. Please, ask me another question. I am eager to assist you. But not in a creepy way.'
        />
        <ChatMessage
          username='mamaya'
          role='user'
          content='This is another long inquiry.'
        />
        <ChatMessage
          username='chatbot'
          role='chatbot'
          content='This is a long response. Please, ask me another question. I am eager to assist you. But not in a creepy way.'
        />
        <ChatMessage
          username='mamaya'
          role='user'
          content='This is another long inquiry.'
        />
        <ChatMessage
          username='chatbot'
          role='chatbot'
          content='This is a long response. Please, ask me another question. I am eager to assist you. But not in a creepy way.'
        />
      </ChatWindowStyled>
      <ChatMessageBoxStyled>
        <InputWrapperStyled>
          <InputStyled $fullWidth placeholder='Ask me anything...' />
        </InputWrapperStyled>
        <ButtonStyled>Send</ButtonStyled>
      </ChatMessageBoxStyled>
    </RootStyled>
  );
};
