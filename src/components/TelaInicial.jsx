import { useState } from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

export default function TelaInicial(props) {

  const [primeira, setPrimeira] = useState(true);

  if (primeira) {
    return (
      <Inicial>
        <img src={logo} alt="Logo" />
        <div>ZapRecall</div>
        <button
          onClick={() => {
            setPrimeira(false);
          }}
        >
          Iniciar Recall!
        </button>
      </Inicial>
    );
 
}
}
const Inicial = styled.div`
  height: auto;
  width: 375px;
  background-color: #fb6b6b;
  border: 1px solid #dbdbdb;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 198px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 514px;

  img {
    height: 161px;
    width: 136px;
    margin-bottom: 13px;
    margin-top: 148px;
  }

  div {
    height: 59px;
    width: 257px;
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
    color: #ffffff;
    margin-bottom: 30px;
  }

  button {
    height: 54px;
    width: 246px;
    border-radius: 5px;
    border: 1px solid #d70900;
    background-color: #ffffff;
    color: #d70900;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
