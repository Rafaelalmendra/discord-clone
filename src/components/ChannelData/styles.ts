import styled from "styled-components";
import { AlternateEmail } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 1.25rem 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 2.875rem - 4.25rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 10px 0 3.563rem;

  border-radius: 7px;
  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 0.875rem;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 1.5rem;
  height: 1.5rem;

  color: var(--gray);
`;

