import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0.594rem 0 1rem;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 1.313rem;
  height: 1.313rem;
  color: var(--symbol);
  cursor: pointer;
`;