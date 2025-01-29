import styled from "styled-components";
import {Header} from "../components/Header.tsx";
import {UsersPages} from "../components/UsersPages.tsx";
import {MyCourses} from "../components/MyCourses.tsx";


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export function Account() {

    return (
        <Container>
            <Header/>
            <ContentContainer>
                <UsersPages/>
                <MyCourses/>
            </ContentContainer>
        </Container>
    )
}

