import styled from 'styled-components';

export const InputStyled = styled.input<{ $fullWidth?: boolean }>`
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--font-color);
  font-size: 1rem;
  padding: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &::placeholder {
    color: var(--font-color-secondary);
  }

  &:focus-visible {
    outline-color: var(--color-primary);
    outline-style: solid;
  }
`;
