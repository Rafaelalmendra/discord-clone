import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.688rem 0 1rem;
  background-color: var(--secondary);
  
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;

  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 1.75rem;

  color: var(--white);
  cursor: pointer;
`;