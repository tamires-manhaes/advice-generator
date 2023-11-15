import { FunctionComponent } from 'react'
import './App.css';
import * as S from './styles';
import AdviceCard from './components/AdviceCard';

const App: FunctionComponent = () => {
  return (
    <S.Container>
      <AdviceCard />
    </S.Container>
  )
}

export default App
