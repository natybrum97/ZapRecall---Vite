import styled from 'styled-components';
import errar from '../Assets/icone_erro.png';
import party from '../Assets/party.png';
import sad from '../Assets/sad.png';

export default function Footer(props) {
    const { contador, array, setArray } = props;

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
            {(contador < 8) && (
                <Footercss ativa={"true"}>

                    <Paragrafo>{contador}/8 CONCLUÍDOS</Paragrafo>

                    <Icones>

                        {array.map((imagem, index) => {
                            return <Icone src={imagem} key={index} />;
                        })}

                    </Icones>

                </Footercss>
            )}

            {(contador === 8) && (
                <Footercss>
                    <Container>

                        <Iconefoto src={iconefoto} />

                        <Titulo>{titulo}</Titulo>

                    </Container>

                    <Mensagem>{mensagem}</Mensagem>

                    <Paragrafo>{contador}/8 CONCLUÍDOS</Paragrafo>

                    <Icones>

                        {array.map((imagem, index) => {
                            return <Icone src={imagem} key={index} />;
                        })}

                    </Icones>

                </Footercss>
            )}
        </>

    );
}


const Footercss = styled.div`
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

