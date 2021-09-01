import React from 'react'

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title> Conversas </Title>

      <Separator />

      <Description> Canal das conversas </Description>
    </Container>
  );
};

export default ChannelInfo;