import React, {useContext} from "react";
import { Button, ButtonGroup, Form, Modal, } from 'react-bootstrap'
import { Formik } from "formik";
import { validationRegAndSignSchema } from "../../Configs/ValidationSchemas";
import { AuthContext } from "../../helpers/AuthContext";
import { PostLogUser } from "../../API/API";

const LogModal = (props) => 
{
    const {setAuthState} = useContext(AuthContext)

    const onSubmit = (data) => {
        PostLogUser(data).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data.token)
                setAuthState({username: response.data.username, id: response.data.id,status: true})
                props.onHide()
            }
        })
    }

    return (
        <Modal  show={props.show} onHide={props.onHide}>
            <Modal.Header className = 'accordion' closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body className = 'accordion'>
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
                            <Button variant="outline-secondary" className="mt-3" type="submit">Войти</Button>
                        </Form>
                    )}
                </Formik>
                <ButtonGroup className="mt-5">
                    <Button variant="outline-secondary" className="ms-2">Войти с помощью Google</Button>
                    <Button variant="outline-secondary" className="ms-3">Войти с помощью GitHub</Button>
                </ButtonGroup>
            </Modal.Body>
        </Modal>
    )
}

export default LogModal
