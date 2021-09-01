import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 1rem;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 0.875rem;
  }

  & + div {
    margin-top: 0.813rem;
  }
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 1.063rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 1rem;
  }

  > span {
    margin-left: 6px;
    padding: 4px 5px;
    border-radius: 4px;

    font-size: 0.688rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--discord);
    color: var(--white);
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 0.813rem;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

