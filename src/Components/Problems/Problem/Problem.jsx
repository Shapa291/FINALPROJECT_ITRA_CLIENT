import React, { useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import classes from './Problem.module.css';
import ProblemComents from './ProblemComents';
import ProblemInterface from './ProblemInterface';
import RateProblem from './RateProblem';
import { OneProblemContext } from '../../../helpers/OneProblemContext'
import { GetOneProblem } from '../../../API/API';
import { ToastProvider } from 'react-toast-notifications';

const Problem = () => {
    let { id } = useParams()
    const { setOneProblemState } = useContext(OneProblemContext)

    useEffect(() => {
        GetOneProblem(id)
            .then((res) => setOneProblemState(res))
    }, [id, setOneProblemState])

    return (
        <ToastProvider placement='top-center'>
            <Container className={classes.body}>
                {<Row>
                    <Col sm={7}>
                        <div className={classes.border}>
                            <ProblemInterface />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className={classes.border}><RateProblem /></div>
                        <div className={classes.border}><ProblemComents /></div>
                    </Col>
                </Row>}
            </Container>
        </ToastProvider>

    )
}

export default Problem