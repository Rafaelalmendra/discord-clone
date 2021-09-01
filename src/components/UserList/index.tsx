import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 3</Role>
      <UserRow nickname="Rafael Almendra" />
      <UserRow nickname="Tabatinga" isBot />
      <UserRow nickname="Joel" isBot/>

      <Role>Offline - 16</Role>
      <UserRow nickname="Sanztanico" isBot />
      <UserRow nickname="Auile" />
      <UserRow nickname="Kawan" isBot />
      <UserRow nickname="Miguel" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
};

export default UserList;