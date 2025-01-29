import styled from "styled-components";
import {UsersPages} from "../components/UsersPages.tsx";
import {MyCourses} from "../components/MyCourses.tsx";
import {useState} from "react";
import {Profile} from "../components/Profile.tsx";
import {Bookmarks} from "../components/Bookmarks.tsx";
import {Achiev} from "../components/Achiev.tsx";


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
    const [profile, setProfile] = useState(true);
    const [myCourses, setMyCourses] = useState(false);
    const [bookmarks, setbookmarks] = useState(false);
    const [achiev, setAchiev] = useState(false);

    return (
        <Container>
            <ContentContainer>
                <UsersPages
                    setProfile={setProfile}
                    setMyCourses={setMyCourses}
                    setbookmarks={setbookmarks}
                    setAchiev={setAchiev}
                />
                {profile && <Profile/>}
                {myCourses && <MyCourses/>}
                {bookmarks && <Bookmarks/>}
                {achiev && <Achiev/>}
            </ContentContainer>
        </Container>
    )
}

