import React, { useContext } from "react";
import { Button, ButtonGroup, Form, Modal, } from 'react-bootstrap'
import { Formik } from "formik";
import { validationRegAndSignSchema } from "../../Configs/ValidationSchemas";
import { AuthContext } from "../../helpers/AuthContext";
import { PostLogUser } from "../../API/API";
import { useTranslation } from "react-i18next";
import FacebookAuth from "../SocialNetworksAuth/FacebookAuth";
import GoogleAuth from "../SocialNetworksAuth/GoogleAuth";

const LogModal = (props) => {
    const { t } = useTranslation();

    const { setAuthState } = useContext(AuthContext)

    const onSubmit = (data) => {
        PostLogUser(data)
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    localStorage.setItem("accessToken", response.data.token)
                    localStorage.setItem("role", response.data.role)
                    setAuthState({ username: response.data.username, id: response.data.id, role: response.data.role, status: true })
                    props.onHide()
                }
            })
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header className='accordion' closeButton>
                <Modal.Title>{t("login.loghead")}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='accordion'>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validateOnBlur
                    validator={() => ({ validationRegAndSignSchema })}
                    onSubmit={onSubmit}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>{t("login.logusername")}</Form.Label>
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
                                <Form.Label>{t("login.logpass")}</Form.Label>
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
                            <Button variant="outline-secondary" className="mt-3" type="submit">{t("login.logbut")}</Button>
                        </Form>
                    )}
                </Formik>
                <ButtonGroup className="mt-5">
                    <GoogleAuth hide={props.onHide} />
                    <FacebookAuth hide={props.onHide} />
                </ButtonGroup>
            </Modal.Body>
        </Modal>
    )
}

export default LogModal
