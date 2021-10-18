import React from "react";
import { Container } from "react-bootstrap";
import ProfileUserSolvedProblems from "../../Components/Users/User/ProfileUserSolvedProblems/ProfileUserSolvedProblems";
import ProfileUserTable from "../../Components/Users/User/ProfileUserTable/ProfileUserTable";
import UserHead from "../../Components/Users/User/UserHead/UserHead";
import UserInterface from "../../Components/Users/User/UserInterface/UserInterface";

const Profile = () => {
    return (
        <Container>
            <UserHead />
            <ProfileUserTable />
            <ProfileUserSolvedProblems />
            <UserInterface />
        </Container>
    )
}

export default Profile