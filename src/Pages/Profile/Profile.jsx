import React, {useContext} from "react";
import { Container } from "react-bootstrap";
import ProfileUserTable from "../../Components/Users/User/ProfileUserTable/ProfileUserTable";
import UserHead from "../../Components/Users/User/UserHead/UserHead";
import UserInterface from "../../Components/Users/User/UserInterface/UserInterface";
import { ProblemsContext } from "../../helpers/ProblemsContext";

const Profile = () => {

    const {problemState} = useContext(ProblemsContext)
    console.log("ProfileState", problemState);

    return (
        <Container>
            <UserHead/>
            <ProfileUserTable/>
            <UserInterface/>
        </Container>
    )
}

export default Profile