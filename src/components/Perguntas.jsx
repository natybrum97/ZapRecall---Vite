import styled from 'styled-components';
import cards from '../cards';
import virar from '../Assets/seta_virar.png'
export default function Perguntas(props) {

    const {aumentaAltura, setAumentaAltura, atualizaComPergunta, setAtualizaComPergunta,atualizaWidth, setAtualizaWidth, atualizaHeight,
         setAtualizaHeight, atualizaWeight, setAtualizaWeight, atualizaSize, setAtualizaSize, atualizaLineHeight, setAtualizaLineHeight,
         atualizaDisplay, setAtualizaDisplay, atualizaMarginbottom, setatualizaMarginbottom, atualizaMarginTop, setAtualizaMarginTop,
          atualizaMarginLeft1, setAtualizaMarginLeft, atualizaMarginLeft2, setAtualizaMarginLeft2, mudaIcone, setMudaIcone, arrayPerguntasClicadas,
          setPerguntasClicadas, atualizaHeightPage, setAtualizaHeightPage} = props;

    let perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];

    function aumentarAltura (indice) {

        const array = [];
        array.push(indice)

        setAumentaAltura('131px');
        perguntas = [];

        for (let i=0; i < cards.length; i++) {
            console.log(cards[i].question);
            perguntas.push(cards[i].question);
        }
            setAtualizaComPergunta(perguntas);
            setAtualizaWidth('247.83px');
            setAtualizaHeight('22px');
            setAtualizaWeight('400');
            setAtualizaSize('18px');
            setAtualizaLineHeight('22px');
            setAtualizaDisplay('block');
            setatualizaMarginbottom('65px');
            setAtualizaMarginTop('18px');
            setAtualizaMarginLeft('15px');
            setAtualizaMarginLeft2('264px');
            setMudaIcone(virar);
            setAtualizaHeightPage('1320px')
}
    
    return (
        <Container3 aumentaAltura={aumentaAltura} atualizaWidth={atualizaWidth} atualizaHeight={atualizaHeight} atualizaWeight={atualizaWeight} atualizaSize={atualizaSize} atualizaLineHeight={atualizaLineHeight} atualizaDisplay={atualizaDisplay} atualizaMarginbottom={atualizaMarginbottom} atualizaMarginTop={atualizaMarginTop} atualizaMarginLeft1={atualizaMarginLeft1} atualizaMarginLeft2={atualizaMarginLeft2} atualizaHeightPage={atualizaHeightPage}>

            {atualizaComPergunta.map((pergunta, indice) => (
                <RenderizaPerguntas
                    key={indice}
                    virtualkey={pergunta}
                    aumentarAltura={aumentarAltura}
                    aumentaAltura={aumentaAltura}
                    mudaIcone = {mudaIcone}
                />
            ))}

        </Container3>
    )
}

function RenderizaPerguntas(props) {
    
    return (
        <div>
            <p>{props.virtualkey}</p>
            <img src={props.mudaIcone} onClick={props.aumentarAltura}/>
        </div>
    );
}

const Container3 = styled.div`
	width: 375px;
    height: ${({ atualizaHeightPage }) => atualizaHeightPage};
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
    height: ${({ aumentaAltura }) => aumentaAltura};
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    display: ${({ atualizaDisplay }) => atualizaDisplay};
    justify-content: center;
    align-items: center;
    }

    p {
    height:  ${({ atualizaHeight }) => atualizaHeight};
    width:  ${({ atualizaWidth }) => atualizaWidth};
    color: #333333;
    font-family: Recursive;
    font-size:  ${({ atualizaSize }) => atualizaSize};
    font-weight:  ${({ atualizaWeight }) => atualizaWeight};
    line-height:  ${({ atualizaLineHeight }) => atualizaLineHeight};
    letter-spacing: 0em;
    text-align: left;
    margin-right: 163px;
    margin-left:  ${({ atualizaMarginLeft1 }) => atualizaMarginLeft1};
    margin-bottom: ${({ atualizaMarginbottom }) => atualizaMarginbottom};
    margin-top: ${({ atualizaMarginTop }) => atualizaMarginTop};
    }

    img {
    height: 23px;
    width: 20px;
    color: #333333;
    margin-left: ${({ atualizaMarginLeft2 }) => atualizaMarginLeft2};
    }

`;