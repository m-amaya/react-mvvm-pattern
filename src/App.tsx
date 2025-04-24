import { RootStyled, TitleStyled } from './App.styled';
import { Chat } from './components/Chat';
import { NameForm } from './views/NameForm';

export const App = () => {
  return (
    <RootStyled>
      <TitleStyled>🤖 Chat Bot</TitleStyled>
      <NameForm />
      <Chat />
    </RootStyled>
  );
};
