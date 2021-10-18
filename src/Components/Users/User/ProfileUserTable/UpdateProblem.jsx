import React, { useContext } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import classes from './UpdateProblem.module.css'
import { Formik } from "formik";
import { PutProblemUpdate, GetAllProblems } from '../../../../API/API';
import { ProblemsContext } from '../../../../helpers/ProblemsContext';
import { useTranslation } from 'react-i18next';
import { selectThemeUpgradeOptions } from '../../../../Configs/ThemesOfProblems';

const UpdateProblem = () => {

    const { setProblemState } = useContext(ProblemsContext)

    const { t } = useTranslation()
    const { id } = useParams()

    const onSubmit = (values) => {
        const filterValues = Object.fromEntries(Object.entries(values).filter(([_, v]) => v !== ''));
        console.log(filterValues);
        PutProblemUpdate(id, filterValues).then((response) => {
            alert(response);
            GetAllProblems().then((responsee) => {
                setProblemState(responsee);
            });
        })
            .then(() => { GetAllProblems() })
            .then((response) => setProblemState(response))
    }

    return (
        <Container className={classes.all}>
            <h1>{t("updateproblem.header")} id:{id}:</h1>
          <Formik
                initialValues={{
                    theme: '',
                    name: '',
                    condition: '',
                    answer: '',
                    answer2: '',
                    answer3: '',
                }}
                onSubmit={onSubmit}
            >
                {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemTheme">
                                <Form.Label>{t("updateproblem.theme")}</Form.Label>
                                <Form.Select
                                    name="theme"
                                    value={values.theme}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {selectThemeUpgradeOptions.map((el, index) => {
                                        return <option key={index} value={el.value}> {el.text} </option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemName">
                                <Form.Label>{t("updateproblem.name")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemCondition">
                                <Form.Label>{t("updateproblem.condition")}</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    type="text"
                                    name="condition"
                                    onChange={handleChange}
                                    value={values.condition}
                                    onBlur={handleBlur}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemAnswer">
                                <Form.Label>{t("updateproblem.answer")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    onChange={handleChange}
                                    value={values.answer}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">{errors.answer}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemAnswer2">
                                <Form.Label>{t("updateproblem.answersec")}</Form.Label>
                                <Form.Control
                                    placeholder={t("updateproblem.answersectext")}
                                    type="text"
                                    name="answer2"
                                    onChange={handleChange}
                                    isInvalid={!!errors.answer2}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemAnswer3">
                                <Form.Label>{t("updateproblem.answersec")}</Form.Label>
                                <Form.Control
                                    placeholder={t("updateproblem.answersectext")}
                                    type="text"
                                    name="answer3"
                                    onChange={handleChange}
                                    isInvalid={!!errors.answer3}
                                />
                            </Form.Group>
                        </Row>
                        <Button variant="outline-secondary" type="submit" className="mt-2">
                            {t("updateproblem.updatebut")}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default UpdateProblem
