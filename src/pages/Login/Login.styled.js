import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 200px);
  position: relative;
  z-index: 2;
`;

export const LoginFrame = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  z-index: 1;
`;

export const Frame = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
`;
