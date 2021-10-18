import React, { useContext, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import classes from "./UserInterface.module.css";
import { Formik } from "formik";
import { validationProblemFormSchema } from "../../../../Configs/ValidationSchemas";
import { ProblemsContext } from "../../../../helpers/ProblemsContext";
import { GetAllProblems, PostProblem } from "../../../../API/API";
import AddImage from "./AddImage";
import { useTranslation } from "react-i18next";
import { selectThemeOptions } from "../../../../Configs/ThemesOfProblems";

const UserInterface = () => {

    const { t } = useTranslation()
    const { setProblemState } = useContext(ProblemsContext)
    const [image, setImage] = useState([])

    const onSubmit = (values) => {
        values.image1 = image[0]
        values.image2 = image[1]
        values.image3 = image[2]
        PostProblem(values)
            .then(() => GetAllProblems())
            .then((response) => setProblemState(response))
    }

    return (
        <div className={classes.interface}>
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
                validationSchema={validationProblemFormSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemTheme">
                                <Form.Label>{t("userprofile.theme")}</Form.Label>
                                <Form.Select
                                    name="theme"
                                    value={values.theme}
                                    onChange={handleChange}
                                    isValid={touched.theme && !errors.theme}
                                    isInvalid={!!errors.theme}
                                    onBlur={handleBlur}
                                >
                                    {selectThemeOptions.map((el, index) => {
                                        return <option key={index} value={el.value}> {el.text} </option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemName">
                                <Form.Label>{t("userprofile.name")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemCondition">
                                <Form.Label>{t("userprofile.condition")}</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    type="text"
                                    name="condition"
                                    onChange={handleChange}
                                    value={values.condition}
                                    isValid={touched.condition && !errors.condition}
                                    isInvalid={!!errors.condition}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">{errors.condition}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="problemAnswer">
                                <Form.Label>{t("userprofile.answer")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="answer"
                                    onChange={handleChange}
                                    value={values.answer}
                                    isValid={touched.answer && !errors.answer}
                                    isInvalid={!!errors.answer}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">{errors.answer}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemAnswer2">
                                <Form.Label>{t("userprofile.answersec")}</Form.Label>
                                <Form.Control
                                    placeholder={t("updateproblem.answersectext")}
                                    type="text"
                                    name="answer2"
                                    onChange={handleChange}
                                    value={values.answer2}
                                    isValid={touched.answer2 && !errors.answer2}
                                    isInvalid={!!errors.answer2}
                                />
                                <Form.Control.Feedback type="invalid">{errors.answer2}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="problemAnswer3">
                                <Form.Label>{t("userprofile.answersec")}</Form.Label>
                                <Form.Control
                                    placeholder={t("updateproblem.answersectext")}
                                    type="text"
                                    name="answer3"
                                    onChange={handleChange}
                                    value={values.answer3}
                                    isValid={touched.answer3 && !errors.answer3}
                                    isInvalid={!!errors.answer3}
                                />
                                <Form.Control.Feedback type="invalid">{errors.answer3}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="loadPicture">
                            <Form.Label>{t("userprofile.img")}</Form.Label>
                            <AddImage getImages={(values) => setImage(values)} />
                        </Form.Group>
                        <Button variant="outline-secondary" type="submit" className="mt-2">
                            {t("userprofile.confirmbut")}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserInterface