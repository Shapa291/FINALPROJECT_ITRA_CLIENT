import React from "react";
import { Button, ButtonGroup, Form,  Modal }from 'react-bootstrap'
import { Formik } from "formik";
import { validationRegAndSignSchema } from "../../Configs/ValidationSchemas";
import { PostSignUser } from "../../API/API";

const SignModal = (props) => {
   
    const onSubmit = (data) => {
        PostSignUser(data).then((response)=>{
        console.log(response.data);
        props.onHide()
    })
}

    return (
        <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton className = 'accordion'   >
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body className = 'accordion'>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validateOnBlur
                        validationSchema={validationRegAndSignSchema}
                        onSubmit={onSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Имя Пользователя</Form.Label>
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
                                    <Form.Label>Пароль</Form.Label>
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
                                    <Form.Label>Подтвердите пароль</Form.Label>
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
                                <Button variant="outline-secondary" className="mt-3" type="submit">Зарегистрироваться</Button>
                            </Form>
                        )}
                    </Formik>
                    <ButtonGroup className="mt-5">
                        <Button variant="outline-secondary" className="ms-2">Зарегистрироваться с помощью Google</Button>
                        <Button variant="outline-secondary" className="ms-3">Зарегистрироваться с помощью GitHub</Button>
                    </ButtonGroup>
                </Modal.Body>
            </Modal>
    )
}

export default SignModal
