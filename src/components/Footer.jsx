import styled from 'styled-components';
import errar from '../Assets/icone_erro.png';
import quaseacertar from '../Assets/icone_quase.png';
import acertar from '../Assets/icone_certo.png';
import party from '../Assets/party.png';
import sad from '../Assets/sad.png';

export default function Footer(props) {
    const { contador, array } = props;

    let mensagem;
    let titulo;
    let iconefoto;

    if (!array.includes(errar) && contador === 8) {
        mensagem = (<Paragrafo2>Você não esqueceu de nenhum flashcard!</Paragrafo2>);
        titulo = (<Paragrafo3>Parabéns!</Paragrafo3>);
        iconefoto = party;

    } else if (array.includes(errar) && contador === 8) {
        mensagem = (<Paragrafo2> Ainda faltam alguns... Mas não desanime!</Paragrafo2>);
        titulo = (<Paragrafo3>Putz...</Paragrafo3>);
        iconefoto = sad;

    }

    return (

        <>
            {(contador === 0) && (
                <Footercss data-test="footer" ativa={"true"}>

                    <Paragrafo>{contador}/8 CONCLUÍDOS</Paragrafo>

                </Footercss>
            )}

            {(contador < 8 && contador !== 0) && (
                <Footercss1 data-test="footer" ativa={"true"}>
                    <Paragrafo>{contador}/8 CONCLUÍDOS</Paragrafo>
                    <Icones>
                        {array.map((imagem, index) => (
                            <RenderizaIcones key={index} imagem={imagem} index={index} array={array} />
                        ))}
                    </Icones>
                </Footercss1>
            )}

            {(contador === 8) && (
                <Footercss1 data-test="footer">
                    <Container0 data-test="finish-text">

                        <Container>

                            <Iconefoto src={iconefoto} />

                            <Titulo>{titulo}</Titulo>

                        </Container>

                        <Mensagem>{mensagem}</Mensagem>

                    </Container0>

                    <Paragrafo>{contador}/8 CONCLUÍDOS</Paragrafo>

                    <Icones>

                        {array.map((imagem, index) => (
                            <RenderizaIcones key={index} imagem={imagem} index={index} array={array} />
                        ))}


                    </Icones>

                </Footercss1>
            )}
        </>

    );
}

function RenderizaIcones(props) {
    if (props.array[props.index] === errar) {
        return <Icone data-test="no-icon" src={errar} />;
    } else if (props.array[props.index] === quaseacertar) {
        return <Icone data-test="partial-icon" src={quaseacertar} />;
    } else if (props.array[props.index] === acertar) {
        return <Icone data-test="zap-icon" src={acertar} />;
    }
}

const Footercss = styled.div`
    height: ${({ ativa }) => (ativa === 'true' ? '70px' : '171px')};
    width: 375px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;

    position: fixed;
    bottom: 0;
`

const Footercss1 = styled.div`
    height: ${({ ativa }) => (ativa === 'true' ? '70px' : '171px')};
    width: 375px;
    display: flex;
    flex-direction:column;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;

    position: fixed;
    bottom: 0;
`

const Paragrafo = styled.div`
    height: 22px;
    width: 155px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-top: 14px;
    margin-bottom: 6px;
`;

const Paragrafo2 = styled.div`
    height: 44px;
    width: 222px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #333333;
`;

const Paragrafo3 = styled.div`
    height: 22px;
    width: 60px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
`;

const Icones = styled.div`
    width:375px;
    height: 23px;
    display:flex;
    justify-content: center;
    align-items:center;
`;

const Icone = styled.img`
    height: 23px;
    width: 23px;
    padding:5px;
`;
const Iconefoto = styled.img`
    height: 23px;
    width: 23px;
    padding:13px;
`;


const Mensagem = styled.div`
    height: 44px;
    width: 222px;
    margin-top: 14px;
`;

const Titulo = styled.div`
    width:88px;
    height:22px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;

`;

const Container = styled.div`
    width:375px;
    height:23px;
    margin-top: 14px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
`;
const Container0 = styled.div`
    width:375px;
    height:101px;
    display:flex;
    flex-direction:column;
    align-items: center;
`;

