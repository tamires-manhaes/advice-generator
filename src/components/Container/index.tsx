import { FunctionComponent, ReactNode } from "react";
import * as S from './styles';

const Container: FunctionComponent<{children: ReactNode}> = ({ children }) => {
  return (
    <S.Page>
      {children}
    </S.Page>
  )
}

export default Container;
