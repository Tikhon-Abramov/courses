import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
`;
const Title = styled.div`
    font-size: 38px;
    font-weight: bold;
    font-style: italic;
    color: black;
    margin: 20px;
`;


export function Bookmarks() {

    return (
        <Container>
            <Title>Закладки</Title>

        </Container>
    )
}