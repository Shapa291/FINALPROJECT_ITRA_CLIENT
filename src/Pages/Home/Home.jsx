import React from "react";
import { Container } from "react-bootstrap";
import TopFiveNew from "../../Components/HomeProblem/TopFiveNew";
import Rate from "../../Components/HomeProblem/TopFiveRate.jsx";

const Home = () => {
    return (
        <Container>
            <TopFiveNew/>
            <Rate/>
        </Container>
    )
}

export default Home