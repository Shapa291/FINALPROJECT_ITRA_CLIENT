import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./UserHead.module.css"
import { AuthContext } from "../../../../helpers/AuthContext";
import { useTranslation } from "react-i18next";
import { SolvedProblemsContext } from "../../../../helpers/SolvedProblemsContext";
import { GetAnswers } from "../../../../API/API";

const UserHead = () => {

    const { t } = useTranslation()
    const { authState } = useContext(AuthContext)
    const { solvedProblemsState, setSolvedProblemsState } = useContext(SolvedProblemsContext)

    useEffect(() => {
        GetAnswers(authState.id).then((resonse) => setSolvedProblemsState(resonse))
    }, [authState.id, setSolvedProblemsState])

    return (
        <div className={classes.userHead}>
            <Row>
                <Col xs={6} md={4}>

                </Col>
                <Col xs={6} md={6}>
                    <h1>{authState.username}</h1>
                    <h5>{t("userprofile.countofsolved")} {solvedProblemsState.length} </h5>
                </Col>
            </Row>
        </div>
    )
}

export default UserHead