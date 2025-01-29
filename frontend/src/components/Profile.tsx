import styled, {keyframes} from "styled-components";


const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    box-shadow: 0px 0px 20px darkgray;
`;

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icon = styled.div`
    display: flex;
    background-color: gray;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const ButtonSend = styled.div`
    display: flex;
    justify-content: center;
    color: #5c6c7c;
    background: linear-gradient(45deg, #b7d9f2 0%, #94c6e6 50%, #74accf 100%);
    padding: 12px 30px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 35px;
    transition: all 200ms linear;
    box-shadow: 1px 2px 5px lightgray;

    &:hover {
        color: #ffffff;
        background: linear-gradient(45deg, #8bc8f7 0%, #72b0e3 50%, #4d94b7 100%);
    }

    &:active {
        background-color: #d5d6d6;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;
const ButtonDelete = styled.div`
    display: flex;
    justify-content: center;
    color: #5c6c7c;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 35px;
    transition: all 200ms linear;
    box-shadow: 1px 2px 5px lightgray;
    margin: 20px;

    &:hover {
        color: #ffffff;
        background-color: #72b0e3;
    }

    &:active {
        background-color: #d5d6d6;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
`;
// Анимация для фокуса
const focusAnimation = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(0, 123, 255, 0.1);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    }
`;
// Стили для инпута
const StyledInput = styled.input`
    width: 250px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    margin: 10px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #007bff;
        animation: ${focusAnimation} 0.5s ease;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &::placeholder {
        color: #999;
    }
`;
const ButtonSubmit = styled.div`
    display: flex;
    justify-content: center;
    color: #5c6c7c;
    background: linear-gradient(45deg, #b7d9f2 0%, #94c6e6 50%, #74accf 100%);
    padding: 12px 30px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 35px;
    transition: all 200ms linear;
    box-shadow: 1px 2px 5px lightgray;

    &:hover {
        color: #ffffff;
        background: linear-gradient(45deg, #8bc8f7 0%, #72b0e3 50%, #4d94b7 100%);
    }

    &:active {
        background-color: #d5d6d6;
    }

    &:focus {
        outline: 1px dotted #959595;
    }
`;


export function Profile() {

    return (
        <Container>
            <Box>
                <IconBox>
                    <Icon/>
                    <ButtonSend>Загрузить фото</ButtonSend>
                    <ButtonDelete>Удалить</ButtonDelete>
                </IconBox>
                <InputContainer>
                    <StyledInput placeholder={'Фамилия'}></StyledInput>
                    <StyledInput placeholder={'Имя'}></StyledInput>
                    <StyledInput placeholder={'Отчество'}></StyledInput>
                </InputContainer>
                <InputContainer>
                    <StyledInput placeholder={'e-mail'}></StyledInput>
                    <StyledInput placeholder={'телефон'}></StyledInput>
                    <StyledInput placeholder={'дата рождения'}></StyledInput>
                </InputContainer>
            </Box>
            <ButtonSubmit>Сохранить изменения</ButtonSubmit>
        </Container>
    )
}