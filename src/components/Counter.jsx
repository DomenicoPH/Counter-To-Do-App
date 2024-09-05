import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--pr);
    width: 240px;
    border-radius: .2rem;
`
const Screen = styled.p`
    background-color: var(--black);
    border-radius: .2rem;
    color: var(--gr);
    font-family: var(--pix);
    font-size: 5rem;
    margin: 1rem 1rem 0 1rem;
    padding: 1rem 0;
    width: 13rem;
    display: flex;
    justify-content: center;
`
const Control = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: 1rem;
`
const Button = styled.button`
    background-color: var(--gr);
    border: none;
    height: 4rem;
    width: 4rem;
    font-family: var(--pix);
    font-size: 2rem;
    color: var(--pr);
    &:hover{
        scale: .99;
        background-color: var(--gr-hover);
        cursor: pointer;
    }
`

const Counter = () => {

    const count = useSelector( (state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleReset = () => dispatch(reset());

    return(
        <CounterContainer>

            <Screen>{count}</Screen>
            <Control>
                <Button onClick={handleDecrement}>-</Button>
                <Button onClick={handleReset}>R</Button>
                <Button onClick={handleIncrement}>+</Button>
            </Control>

        </CounterContainer>
    )
};

export default Counter;