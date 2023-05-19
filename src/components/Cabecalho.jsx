import styled from 'styled-components';
import logo from '../Assets/logo.png'

export default function Jogo(props) {

    return (
        <Container2>
            <img src={logo} />
            <div>ZapRecall</div>
        </Container2>
    )
}

const Container2 = styled.div`
	height: 101px;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: #FB6B6B;
    margin-bottom: 59px;
	
	img {
	height: 60px;
    width: 52px;
	}

    div {
    height: 44px;
    width: 203.17px;
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;