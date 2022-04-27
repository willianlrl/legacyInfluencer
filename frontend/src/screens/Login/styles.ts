import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.colors.backgroundScape};
`;

export const Header = styled.View`
  width: 100%;
  height: 33%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.View`
  width: 100%;
  height:64%;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;