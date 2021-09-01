import React from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Rafael Almendra"
          date="16/04/2021"
          content="Hoje é meu aniversário"
        />

        <ChannelMessage
          author="Tabatinga"
          date="16/04/2021"
          content= {
            <>
              <Mention>@Rafael Alnendra</Mention>, me carrega no Valorant de novo por favor?
            </>
          }
          
          isBot
        />

        <ChannelMessage
          author="Sanztanico"
          date="16/04/2021"
          content= {
            <>
              <Mention>@Rafael Alnendra</Mention>, sobe meu elo ai?
            </>
          }
          
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em # só na conversinha"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;