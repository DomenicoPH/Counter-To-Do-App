import styled from "styled-components";
import { useSelector } from "react-redux";
import CreateTodo from "../components/Todo/CreateTodo";
import TodoList from "../components/Todo/TodoList";

const TodoAppContainer = styled.div`
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

const TodoApp = () => {

    const todos = useSelector( (state) => state.todos.todos);
    
    return(
        <TodoAppContainer>
            <Title>To-do App</Title>
            <CreateTodo />
            <TodoList todos={todos} />

        </TodoAppContainer>
    )
};

export default TodoApp;