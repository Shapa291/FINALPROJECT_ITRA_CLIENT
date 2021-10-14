import React from "react";
import { Container } from "react-bootstrap";
import ProblemsTable from "../../Components/Problems/ProblemsTable/ProblemsTable";

const Problems = () => {
    return(
        <Container>
            <h1>Задачи</h1>
            <ProblemsTable/>
        </Container>
    )
}

export default Problems