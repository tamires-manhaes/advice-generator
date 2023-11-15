import { theme } from '../../theme';
import styled from 'styled-components';

export const L = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';  
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.titleColor};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;
