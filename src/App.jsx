import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Perguntas from './components/Perguntas'
import Footer from './components/Footer'
import TelaInicial from './components/TelaInicial'
import styled from 'styled-components';

export default function App() {

  const [contador, setContador] = useState(0);

  

  return (
    <>
    
      <Tudo>

        <Container1>

          <Cabecalho />

          <Perguntas contador={contador} setContador={setContador} />

          <Footer contador={contador} />

        </Container1 >

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