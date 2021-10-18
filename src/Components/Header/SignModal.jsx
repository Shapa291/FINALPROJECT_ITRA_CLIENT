import React from "react";
import { Button, Form, Modal } from 'react-bootstrap'
import { Formik } from "formik";
import { validationRegAndSignSchema } from "../../Configs/ValidationSchemas";
import { PostSignUser } from "../../API/API";
import { useTranslation } from "react-i18next";

const SignModal = (props) => {

    const { t } = useTranslation();

    const onSubmit = (data) => {
        PostSignUser(data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else { props.onHide() }
        })
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton className='accordion'   >
                <Modal.Title>{t("register.reghead")}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='accordion'>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        confirmPassword: '',
                        role: 0,
                    }}
                    validateOnBlur
                    validationSchema={validationRegAndSignSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>{t("register.regusername")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    isInvalid={!!errors.username}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicSecondPassword">
                                <Form.Label>{t("register.regpass")}</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicSecondConfirmPassword">
                                <Form.Label>{t("register.regpassconfirm")}</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                    isInvalid={!!errors.confirmPassword}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="outline-secondary" className="mt-3" type="submit">{t("register.regbut")}</Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default SignModal
