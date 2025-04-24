import styled from 'styled-components';

export const ButtonStyled = styled.button`
  align-items: center;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  padding: 4px 12px;

  &:active {
    opacity: 0.8;
  }

  &:focus-visible {
    outline-color: var(--color-primary);
    outline-offset: 2px;
    outline-style: solid;
  }
`;
