import React, { useContext } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { OneProblemContext } from '../../../helpers/OneProblemContext'

const ProblemInterface = () => {

    const { oneProblemState } = useContext(OneProblemContext)
    const data = oneProblemState
    const onSubmit = (value) => {
        console.log(value);
    }

    return (
        <>
            <Row>
                <Col>
                    <h1>Название: {data.name} id: {data.id}</h1>
                    <h6 style={{ color: 'gray' }}>Пользователь: {data.username}</h6>
                </Col>
            </Row>
            <h5>Тема: {data.theme}</h5>
            <div>Условие: {data.condition}</div>
            <Formik
                initialValues={{
                    answer: '',
                }}
                onSubmit={onSubmit}
            >
                {({
                    handleChange,
                    values,
                }) => (
                    <Form>
                        <Form.Group>
                            <Form.Control
                                className="mt-3"
                                type="text"
                                name="answer"
                                value={values.answer}
                                onChange={handleChange}
                                placeholder="Введите ответ" />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit" className="mt-2">
                            Ответить
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default ProblemInterface