import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./UserHead.module.css"
import { AuthContext } from "../../../../helpers/AuthContext";

const UserHead = () => {
    const {authState} = useContext(AuthContext)

    return (
        <div className={classes.userHead}>
            <Row>
                <Col xs={6} md={4}>
                    
                </Col>
                <Col xs={6} md={6}>
                    <h1>{authState.username}</h1>
                    <h4>Количество опубликованных задач</h4>
                    <h5>Количество решённых задач</h5>
                </Col>
            </Row>
        </div>
    )
}

export default UserHead