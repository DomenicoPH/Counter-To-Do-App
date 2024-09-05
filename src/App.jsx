import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import CounterApp from "./views/CounterApp";
import TodoApp from "./views/TodoApp";

import Nav from "./components/Nav";

const AppContainer = styled.div`
  background-color: var(--black);
`

const App = () => {

  return (
    <AppContainer>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<CounterApp />} />  
        <Route path="/todo" element={<TodoApp />} />  
      </Routes>
    </AppContainer>
  )
}

export default App
