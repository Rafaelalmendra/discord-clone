import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="conversas" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="cs" />
      <ChannelButton channelName="warzone" />
      <ChannelButton channelName="minecraft" />
    </Container>
  );
};

export default ChannelList;