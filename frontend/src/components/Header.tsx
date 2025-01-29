import styled from "styled-components";


const Container = styled.div`
    display: flex;
    background-color: whitesmoke;
    justify-content: center;
    width: 100%;
    height: 8vh;
    border: slategray 1px solid;
`;
const HeaderContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:20px;
`
const CompanyName = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: black;
`
const LinksContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    color: #5c6c7c;
    background-color: whitesmoke;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 35px;
    transition: all 500ms linear;
    box-shadow: 0px 0px 15px #e4e4e4;

    &:hover {
        color: #ffffff;
        background: #e1e0e0;
    }

    &:active {
        background-color: #d5d6d6;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;


export function Header() {

    return (
        <Container>
            <HeaderContainer>
                <TitleContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                         className="bi bi-award-fill" viewBox="0 0 16 16">
                        <path
                            d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                    </svg>
                    <CompanyName>
                        TOM courses
                    </CompanyName>
                </TitleContainer>
                <LinksContainer>
                    <Button>Home</Button>
                    <Button>Courses</Button>
                    <Button>About us</Button>
                    <Button>Suppport</Button>
                </LinksContainer>
            </HeaderContainer>
        </Container>
    )
}

