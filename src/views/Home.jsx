import styled from "styled-components";

const HomeContainer = styled.div`
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Welcome = styled.h2`
    color: var(--pr);
    font-family: var(--pix);
    font-size: 4rem;
`

const Home = () => {
    return(
        <HomeContainer>
            <Welcome>Welcome</Welcome>
        </HomeContainer>
    )
};

export default Home;