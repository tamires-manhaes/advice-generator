import { FunctionComponent, useEffect, useState } from "react";
import * as S from './styles';
import divisorImg from '../../assets/pattern-divider-desktop.svg';
import buttonImg from '../../assets/icon-dice.svg';
import { AdviceResponse, fetchAdvice } from "../../services";
import Loader from "../Loader";

const AdviceCard: FunctionComponent = () => {
  const [advice, setAdvice] = useState<AdviceResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchAdvice = async () => {
    const response = await fetchAdvice();
    setIsLoading(true);
    if(response){
      setAdvice(response);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleFetchAdvice();
  },[])

  return (
    <S.Card>
      <S.Title>ADVICE {'#'}{advice?.slip.id}</S.Title>
      <S.Content>
        <span>"{advice?.slip.advice}"</span>
      </S.Content>
      <S.DivisorImg src={divisorImg} alt="divisor ilustration" />
      <S.Button onClick={handleFetchAdvice}>
        {isLoading ? <Loader /> : <S.DiceImg src={buttonImg} alt="dice ilustration" />}
      </S.Button>
    </S.Card>
  )
}

export default AdviceCard;
