import styled from "styled-components";
import Counter from "../components/Counter";

const CounterAppContainer = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`
const Title = styled.div`
    font-family: var(--pix);
    font-size: 4rem;
    color: var(--pr);
    margin-bottom: 2rem;
`

const CounterApp = () => {
    return(
        <CounterAppContainer>
            <Title>Counter</Title>
            <Counter />
        </CounterAppContainer>
    )
};

export default CounterApp;