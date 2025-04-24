import styled from 'styled-components';

export const RootStyled = styled.div`
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: var(--window-height);
  width: 200px;
`;

export const SearchCellStyled = styled.div`
  display: flex;
  padding: 12px;
`;

export const TitleCellStyled = styled.div`
  align-items: flex-end;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  padding: 24px 12px 8px;
`;

export const TitleTextStyled = styled.span`
  display: flex;
  font-weight: bold;
`;

export const ChannelNavStyled = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;

  & a:last-child {
    border-bottom: none;
  }
`;

export const ChannelTabStyled = styled.a<{ $selected?: boolean }>`
  background-color: ${(props) =>
    props.$selected ? 'var(--background-color-active)' : 'transparent'};
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  padding: 12px;

  &:hover {
    background-color: var(--background-color-hover);
  }

  &:focus-visible {
    outline-color: var(--color-primary);
    outline-offset: -1px;
    outline-style: solid;
  }
`;

export const ChannelTextStyled = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
