import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Perguntas from './components/Perguntas'
import Footer from './components/Footer'
import TelaInicial from './components/TelaInicial'
import play from './Assets/seta_play.png'

import styled from 'styled-components';
export default function App() {

  let [aumentaAltura, setAumentaAltura] = useState('65px');
  let [atualizaComPergunta, setAtualizaComPergunta] = useState(["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]);
  let [atualizaWidth, setAtualizaWidth] = useState('87px');
  let [atualizaHeight, setAtualizaHeight] = useState('19px');
  let [atualizaWeight, setAtualizaWeight] = useState('700');
  let [atualizaSize, setAtualizaSize] = useState('16px');
  let [atualizaLineHeight, setAtualizaLineHeight] = useState('19.2px');
  let [atualizaDisplay, setAtualizaDisplay] = useState('flex');
  let [atualizaMarginbottom, setatualizaMarginbottom] = useState('0px');
  let [atualizaMarginTop, setAtualizaMarginTop] = useState('0px');
  let [atualizaMarginLeft1, setAtualizaMarginLeft] = useState('0px');
  let [atualizaMarginLeft2, setAtualizaMarginLeft2] = useState('0px');
  let [mudaIcone, setMudaIcone] = useState(play);
  let [arrayPerguntasClicadas, setPerguntasClicadas] = useState({});
  let [atualizaHeightPage, setAtualizaHeightPage] = useState('790px');


  return (
    <>
      <Tudo>

        <Container1>

          <Cabecalho />

          <Perguntas aumentaAltura={aumentaAltura} setAumentaAltura={setAumentaAltura} atualizaComPergunta={atualizaComPergunta} setAtualizaComPergunta={setAtualizaComPergunta} atualizaWidth={atualizaWidth} setAtualizaWidth = {setAtualizaWidth} atualizaHeight={atualizaHeight} setAtualizaHeight={setAtualizaHeight} atualizaWeight={atualizaWeight} setAtualizaWeight={setAtualizaWeight} atualizaSize={atualizaSize} setAtualizaSize={setAtualizaSize} atualizaLineHeight={atualizaLineHeight} setAtualizaLineHeight={setAtualizaLineHeight} atualizaDisplay={atualizaDisplay} setAtualizaDisplay={setAtualizaDisplay} atualizaMarginbottom={atualizaMarginbottom} setatualizaMarginbottom={setatualizaMarginbottom} atualizaMarginTop={atualizaMarginTop} setAtualizaMarginTop={setAtualizaMarginTop} atualizaMarginLeft1={atualizaMarginLeft1} setAtualizaMarginLeft={setAtualizaMarginLeft} atualizaMarginLeft2={atualizaMarginLeft2} setAtualizaMarginLeft2={setAtualizaMarginLeft2} mudaIcone={mudaIcone} setMudaIcone={setMudaIcone} arrayPerguntasClicadas={arrayPerguntasClicadas} setPerguntasClicadas={setPerguntasClicadas} atualizaHeightPage={atualizaHeightPage} setAtualizaHeightPage={setAtualizaHeightPage}/>

          <Footer />

        </Container1>

      </Tudo>

      <TelaInicial />

    </>
  )
}

const Container1 = styled.div`
	  height: 667px;
    width: 375px;
    border: 1px solid #DBDBDB;
    background-color: #FB6B6B;
`;

const Tudo = styled.div`
	   position: relative;
`;