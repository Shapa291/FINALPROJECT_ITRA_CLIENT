import React, { useContext, useState } from 'react'
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap'
import { OneProblemContext } from '../../../helpers/OneProblemContext'
import { GetAnswers, PostAnswer } from '../../../API/API'
import { useToasts } from 'react-toast-notifications'
import { AuthContext } from '../../../helpers/AuthContext'
import ProblemImages from './ProblemImages'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'
import { SolvedProblemsContext } from '../../../helpers/SolvedProblemsContext';

const ProblemInterface = () => {
    const { t } = useTranslation();

    const { addToast } = useToasts()

    const { oneProblemState } = useContext(OneProblemContext)
    const { authState } = useContext(AuthContext)
    const { setSolvedProblemsState } = useContext(SolvedProblemsContext)

    const data = oneProblemState
    const [userAnswer, setUserAnswer] = useState("")
    const addAnswer = () => {

        if (userAnswer !== "" && (userAnswer === data.answer || userAnswer === data.answer2 || userAnswer === data.answer3)) {
            addToast('Решено правильно', {
                appearance: 'success',
                autoDismiss: true,
            })
            PostAnswer(data.id)
                .then(() => GetAnswers(authState.id))
                .then((response) => setSolvedProblemsState(response))
            setUserAnswer("")
        } else {
            addToast('Не верный ответ', {
                appearance: 'error',
                autoDismiss: true
            })
            setUserAnswer("")
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <h1>{t("problem.name")}: {data.name} id: {data.id}</h1>
                    <h6 style={{ color: 'gray' }}>{t("problem.user")}: {data.username}</h6>
                </Col>
            </Row>
            <h5>{t("problem.theme")}: {data.theme}</h5>
            <div>{t("problem.condition")}:</div>
            <ReactMarkdown className="rounded w-2/3 p-2 mb-2">
                {data.condition}
            </ReactMarkdown>
            <ProblemImages
                img1={data.image1}
                img2={data.image2}
                img3={data.image3}
            />
            <InputGroup className="mt-2 mb-2">
                <Form.Control
                    placeholder={t("problem.solvetext")}
                    value={userAnswer}
                    type="text"
                    onChange={(event) => { setUserAnswer(event.target.value) }}
                />
            </InputGroup>
            {authState.status ?
                (
                    <Button className="ms-1" variant="outline-secondary" onClick={addAnswer}>{t("problem.solvebut")}</Button>
                )
                :
                (
                    <h4>{t("problem.answerauth")}</h4>
                )
            }
        </>
    )
}

export default ProblemInterface