import styled from "styled-components";
import { removeTodo } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
`
const TodoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--pr-dark);
`
const TodoTitle = styled.h2`
    font-family: var(--pix);
    font-weight: 100;
    color: white;
    opacity: .4;
    margin: 0;
    padding: .5rem;
`
const TodoDescription = styled.h2`
    font-family: var(--pix);
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 2rem;
    text-align: justify;
    letter-spacing: 2px;
    background-color: var(--pr);
    color: var(--gr);
    margin: 0;
    margin-bottom: 5px;
    padding: .5rem;
    padding-left: .4rem;
`
const CloseButton = styled.button`
    background-color: var(--pr);
    font-family: var(--pix);
    font-size: 1rem;
    border: none;
    margin-right: .5rem;

`

const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(removeTodo(todo.id))
    }

    return(
        <TodoContainer>
            <TodoHeader>
                <TodoTitle>{todo.id}. {todo.title || 'No title'}</TodoTitle>
                <CloseButton onClick={handleClose}>X</CloseButton>
            </TodoHeader>
            <TodoDescription>{todo.description || 'No description'}</TodoDescription>
        </TodoContainer>
    )
};

export default Todo;