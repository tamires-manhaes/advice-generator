import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.backgroundColor};
  min-height: 100vh;
`;
