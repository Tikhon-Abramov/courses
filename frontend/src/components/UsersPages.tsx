import styled from "styled-components";

const Container = styled.div`
    display: flex;
    top: 10%;
    left: 0;
    justify-content: left;
    width: 30%;
    height: 92vh;
    background-color: whitesmoke;
    flex-direction: column;
`;
const UserContainer = styled.div`
    display: flex;
    max-height: 60px;
    width: 100%;
    align-items: center;
    padding-inline: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
`;
const UserIcon = styled.div`
    display: flex;
    background-color: gray;
    height: 45px;
    width: 45px;
    border-radius: 50%;
`;
const UserName = styled.div`
    display: flex;
    font-size: 18px;
    font-style: italic;
    font-weight: 600;
    margin-left: 20px;
    color: black;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 8px 30px;
    color: black;
    background-color: whitesmoke;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 300ms linear;

    &:hover {
        background: #e1e0e0;
    }

    &:active {
        background-color: #d5d6d6;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;


export function UsersPages() {

    return (
        <Container>
            <UserContainer>
                <UserIcon/>
                <UserName>Абрамов Тихон</UserName>
            </UserContainer>
            <ButtonContainer>
                <Button>Мои курсы</Button>
                <Button>Предметы</Button>
                <Button>Закладки</Button>
                <Button>Примечание</Button>
                <Button>Избранное</Button>
            </ButtonContainer>
        </Container>
    )
}