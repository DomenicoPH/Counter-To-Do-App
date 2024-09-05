import styled from "styled-components";
import Todo from "./Todo";

const TodoListContainer = styled.div`
    
`
const NoTodos = styled.div`
    font-family: var(--pix);
    color: var(--pr);
    padding: 2rem;
    letter-spacing: 1rem;
    margin-left: 1rem;
`
const TodoList = ({ todos }) => {

    console.log(todos)
    return(
        <TodoListContainer>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            ) : (
                <NoTodos>No todos available</NoTodos>
            )}
        </TodoListContainer>
    )
};

export default TodoList;