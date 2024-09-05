import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
    background-color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
`
const NavLeft = styled.div`
    margin-left: 1rem;
`
const NavRight = styled.div`
    margin-right: 1rem;
`
const Logo = styled.p`
    font-family: var(--pix);
    color: var(--gr);
    font-size: 2rem;
    margin: 0;
    &:hover{
        scale: .99;
        color: var(--gr-hover);
        cursor: pointer;
    }
`
const Option = styled.button`
    text-transform: uppercase;
    background-color: var(--gr);
    color: purple;
    border: none;
    margin: 0 1px;
    font-family: var(--pix);
    font-size: 1.2rem;
    &:hover{
        scale: .99;
        background-color: var(--gr-hover);
        cursor: pointer;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

const Nav = () => {
    return(
        <NavContainer>

            <NavLeft>
                <StyledLink to={'/'}><Logo>Gnomono-dev</Logo></StyledLink>
            </NavLeft>

            <NavRight>
                <Link to={'/counter'}><Option>Counter</Option></Link>
                <Link to={'/todo'}><Option>To-do App</Option></Link>
            </NavRight>

        </NavContainer>
    )
};

export default Nav;