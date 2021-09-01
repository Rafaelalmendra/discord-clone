import styled from "styled-components";

// SL - server list
//SN - server name
//CI - channel info
//CL - channel list
//CD - channel data
//UL - user list
//UI - user info

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 4.438rem 15.4rem auto 15rem;
  grid-template-rows: 2.875rem auto 3.25rem;
  grid-template-areas: 
    'SL SN CI CI'  
    'SL CL CD UL'
    'SL UI CD UL';
  height: 100vh;
`;