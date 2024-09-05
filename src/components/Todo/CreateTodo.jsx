import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const CreateTodoForm = styled.form`
    display: flex;
    align-items: center;
    gap: .2rem;
    margin-bottom: 5px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-family: var(--pix);
    color: var(--pr);
    font-size: 1.4rem;
    font-weight: 100;
    letter-spacing: .2rem;
    padding: .2rem 0;
`
const Input = styled.input`
    border: none;
    font-size: 1rem;
`
const Button = styled.button`
    border: none;
    font-family: var(--pix);
    font-size: 2rem;
    background-color: var(--gr);
    height: 3.3rem;
    width: 3rem;
    &:hover{
        background-color: var(--gr-hover);
        cursor: pointer;
    }
`
const CreateTodo = () => {

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        console.log(todo)
        setTodo({
            title: '',
            description: '',
        })
    }

    return(
        <CreateTodoForm onSubmit={handleSubmit}>

            <Box>
                <Label htmlFor="title">Title</Label>
                <Input 
                type="text"
                name="title"
                value={todo.title}
                onChange={handleChange}
                />
            </Box>
            <Box>
                <Label htmlFor="description">Description</Label>
                <Input 
                    type="text"
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <Button type='submit'>+</Button>
            </Box>
            
        </CreateTodoForm>
    )
};

export default CreateTodo;