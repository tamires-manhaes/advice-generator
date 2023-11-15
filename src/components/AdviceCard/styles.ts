import styled from 'styled-components';
import { theme } from '../../theme';

export const Card = styled.div`
  position: relative;
  background: ${theme.colors.boxColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${theme.borderRadius};
  padding: 16px 24px;
  max-width: 50vw;
  width: 100%;

  @media screen and (max-width: 768px){
    max-width: 80vw;
  }
`;

export const Content = styled.div`
  margin-bottom: 16px;
  > span {
    color: ${theme.colors.textColor};
    font-size: 24px;
    text-align: center;
  }
`;

export const DivisorImg = styled.img`
  margin: 32px auto;
  width: 100%;
`;

export const DiceImg = styled.img``;

export const Title = styled.h3`
  color: ${theme.colors.titleColor};
  font-size: 32px;
`;

export const Text = styled.p`
  color: ${theme.colors.textColor};
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background: ${theme.colors.titleColor};
  padding: 12px;
  border-radius: 50%;
`;
