import React from 'react';

import { 
  Container,
  Content,
  UserData,
  UserPic,
  UserGreeting,
  TextGreeting,
  Icon

} from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <UserData>
          <UserPic source={require('../../assets/user.png')} />
          <UserGreeting>
            <TextGreeting>Olá , </TextGreeting>
            <TextGreeting>Usuário</TextGreeting>
          </UserGreeting>
        </UserData>
        <Icon source={require('../../assets/icon.png')}/>  
      </Content>
    </Container>
  );
};