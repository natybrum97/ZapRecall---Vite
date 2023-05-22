import styled from 'styled-components';
import cards from '../cards';
import play from '../Assets/seta_play.png';
import virar from '../Assets/seta_virar.png';
import errar from '../Assets/icone_erro.png';
import quaseacertar from '../Assets/icone_quase.png';
import acertar from '../Assets/icone_certo.png';
import { useState } from 'react';

export default function Perguntas(props) {
    const { contador, setContador, array, setArray, primeira, setPrimeira } = props;

    return (
        <ContainerPerguntas>
            {cards.map((card) => (
                <RenderizaPerguntas
                    key={card.id}
                    id={card.id}
                    question={card.question}
                    answer={card.answer}
                    contador={contador}
                    setContador={setContador}
                    array={array}
                    setArray={setArray}
                />
            ))}
        </ContainerPerguntas>
    );
}

function RenderizaPerguntas(props) {

    const { id, question, answer, contador, setContador, array, setArray, primeira } = props;

    const [tela1, setTela1] = useState({ primeira });
    const [tela2, setTela2] = useState(false);
    const [tela3, setTela3] = useState(false);
    const [tela4, setTela4] = useState(false);
    const [tela5, setTela5] = useState(false);
    const [tela6, setTela6] = useState(false);
    const [defineIcone, setDefineIcone] = useState(null);
    const [colocarSublinhado, setColocarSublinhado] = useState('');

    function naoLembrei() {
        setTela3(false);
        setTela4(true);
        setContador(contador + 1);
        setDefineIcone(errar);
        setColocarSublinhado('red');
        const novoArray = [...array, errar];
        setArray(novoArray)


    }

    function quase() {
        setTela3(false);
        setTela5(true);
        setContador(contador + 1);
        setDefineIcone(quaseacertar);
        setColocarSublinhado('orange');
        const novoArray = [...array, quaseacertar];
        setArray(novoArray);

    }

    function zap() {
        setTela3(false);
        setTela6(true);
        setContador(contador + 1);
        setDefineIcone(acertar);
        setColocarSublinhado('green');
        const novoArray = [...array, acertar];
        setArray(novoArray);

    }

    return (
        <>
            {tela1 && (
                <Cartao data-test="flashcard" ativar={!tela1.toString()}>
                    <Pergunta data-test="flashcard-text">Pergunta {id}</Pergunta>
                    <BotaoPlay data-test="play-btn" src={play} onClick={() => {
                        setTela1(false);
                        setTela2(true);
                    }
                    }
                    />
                </Cartao>
            )}

            {tela2 && (
                <Cartao data-test="flashcard" ativa={tela2.toString()}>
                    <TextoPergunta data-test="flashcard-text">{question}</TextoPergunta>
                    <BotaoVirar data-test="turn-btn" src={virar} onClick={() => {
                        setTela2(false);
                        setTela3(true);
                    }
                    } />
                </Cartao>
            )}

            {tela3 && (
                <Cartao1 data-test="flashcard">
                    <TextoResposta data-test="flashcard-text">{answer}</TextoResposta>
                    <Lembranca>
                        <Button1 data-test="no-btn" onClick={naoLembrei}>
                            <Buttonajuste>Não lembrei</Buttonajuste>
                        </Button1>
                        <Button2 data-test="partial-btn" onClick={quase}>Quase não lembrei</Button2>
                        <Button3 data-test="zap-btn" onClick={zap}>Zap!</Button3>
                    </Lembranca>
                </Cartao1>
            )}

            {tela4 && (
                <Cartao data-test="flashcard">
                    <Pergunta1 data-test="flashcard-text" sublinhado={colocarSublinhado}>Pergunta {id}</Pergunta1>
                    <BotaoPlay data-test="no-icon" src={defineIcone} />
                </Cartao>
            )}

            {tela5 && (
                <Cartao data-test="flashcard">
                    <Pergunta1 data-test="flashcard-text" sublinhado={colocarSublinhado}>Pergunta {id}</Pergunta1>
                    <BotaoPlay data-test="partial-icon"  src={defineIcone} />
                </Cartao>
            )}
            {tela6 && (
                <Cartao data-test="flashcard">
                    <Pergunta1 data-test="flashcard-text" sublinhado={colocarSublinhado}>Pergunta {id}</Pergunta1>
                    <BotaoPlay data-test="zap-icon" src={defineIcone} />
                </Cartao>
            )}
        </>
    );
}

const ContainerPerguntas = styled.div`
    width: 375px;
    height: auto;
    background-color: #fb6b6b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 170px;
`;

const Cartao = styled.div`
    height: ${({ ativa }) => (ativa === 'true' ? '131px' : '65px')};
    width: 300px;
    border-radius: 5px;
    background-color: ${({ ativa }) => (ativa === 'true' ? '#FFFFD4' : '#ffffff')};
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    display: ${({ ativa }) => (ativa === 'true' ? 'block' : 'flex')};
    justify-content: center;
    align-items: center;
`;

const Cartao1 = styled.div`
    height: auto;
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
`;
const Pergunta = styled.p`
    height: 19px;
    width: 87px;
    color: #333333;
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 163px;
`;

const Pergunta1 = styled.p`
    height: 19px;
    width: 87px;
    color: ${({ sublinhado }) => (sublinhado === 'red' ? '#FF3030' : sublinhado === 'orange' ? '#FF922E' : sublinhado === 'green' ? '#2FBE34' : '#333333')};
    font-family: Recursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 163px;
    text-decoration: ${({ sublinhado }) => (sublinhado === 'red' ? 'line-through' : sublinhado === 'orange' ? 'line-through' : sublinhado === 'green' ? 'line-through' : 'none')};
`;

const BotaoPlay = styled.img`
    height: 23px;
    width: 20px;
    color: #333333;
    cursor: pointer;

`;

const TextoPergunta = styled.p`
    height: 22px;
    width: 247.83px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:65px;
    margin-top: 18px;
    margin-left: 15px;
    color: #333333;
`;

const BotaoVirar = styled.img`
    height: 20px;
    width: 30px;
    left: 73px;
    color: #333333;
    margin-left: 254px;
    cursor: pointer;
`;

const TextoResposta = styled.p`
    height: auto;
    width: 247.83px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-top: 18px;
    margin-left: 15px;
`;

const Lembranca = styled.div`
    height:37.17px;
    width: 300px;
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top: 21.83px;
    margin-bottom:10px;
`;

const Button1 = styled.div`
    height: 37.17px;
    width: 85.17px;
    border-radius: 5px;
    background-color: #FF3030;
    margin-right: 7.74px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Buttonajuste = styled.div`
    height: 37.17px;
    width: 65.04px;
    background-color: #FF3030;
    color: #FFFFFF;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Button2 = styled.div`
    height: 37.17px;
    width: 85.17px;
    border-radius: 5px;
    background-color: #FF922E;
    margin-right: 7.74px;
    color: #FFFFFF;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Button3 = styled.div`
    height: 37.17px;
    width: 85.17px;
    border-radius: 5px;
    background-color: #2FBE34;
    color: #FFFFFF;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;