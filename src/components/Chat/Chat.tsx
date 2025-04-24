import { ChannelList } from '../../views/ChannelList';
import { ChannelPanel } from '../../views/ChannelPanel';
import { RootStyled } from './Chat.styled';

export const Chat = () => {
  return (
    <RootStyled>
      <ChannelList />
      <ChannelPanel />
    </RootStyled>
  );
};
