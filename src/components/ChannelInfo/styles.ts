import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;

  padding: 0 1.063rem;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;
export const HashtagIcon = styled(Hashtag)`
  width: 1.5rem; 
  height: 1.5rem;

  color: var(--symbol);
`;
export const Title = styled.h1`
  margin-left: 0.563rem;
  font-size: 1rem;
  font-weight: 600;

  color: var(--white);
`;
export const Separator = styled.div`
  width: 1px; 
  height: 1.5rem;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;
export const  Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;