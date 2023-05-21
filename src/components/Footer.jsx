import styled from 'styled-components';
export default function Footer(props) {

    const {contador} = props;

    return (
        <Footercss>
            <p>{contador}/8 CONCLUÍDOS</p>
        </Footercss>
    )
}

const Footercss = styled.div`
	height: 70px;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #DBDBDB;

    position: fixed;
    bottom: 0;

    p {
    height: 22px;
    width: 155px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    }
`;