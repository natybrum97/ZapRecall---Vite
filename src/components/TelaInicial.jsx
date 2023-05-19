import styled from 'styled-components';
import logo from '../Assets/logo.png'
export default function TelaInicial(props) {

    return (
        <Inicial>

            <img src={logo} />
            <div>ZapRecall</div>
            <button>Iniciar Recall!</button>

        </Inicial>
    )
}

const Inicial = styled.div`
	 height: 1033px;
    width: 375px;
    background-color: #FB6B6B;
    border: 1px solid #DBDBDB;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 300x;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
	
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
    color: #FFFFFF;
    margin-bottom: 30px;
}

    button {
    height: 54px;
    width: 246px;
    border-radius: 5px;
    border: 1px solid #D70900;
    background-color: #FFFFFF;
    color: #D70900;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;

}
	
`;