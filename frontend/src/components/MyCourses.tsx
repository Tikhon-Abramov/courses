import styled from "styled-components";
import {product} from "../DataBase/DB.tsx";



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
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    padding: 20px;
    align-items: flex-start;
    background-color: whitesmoke;

`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
    color: black;
    transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px); /* Поднимает карточку вверх */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Увеличивает тень */
    }
`;
const BackgroundImage = styled.img`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: center;
`;
const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    margin-top:0;
`
const CardDescription = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin-top:10px;
    color: gray;
`


export function MyCourses() {

    return (
        <Container>
            <Title>Мои курсы</Title>
            <CardContainer>
                {product.map(course => (
                    <Card key={course.id}>
                        <BackgroundImage src={course.productImage}/>
                        <CardTitle>{course.title}</CardTitle>
                        {course.process !== 0 ? <CardDescription>{course.process}% Пройдено</CardDescription> : <CardDescription>Начать курс</CardDescription>}
                    </Card>
                ))}
            </CardContainer>
        </Container>
    )
}