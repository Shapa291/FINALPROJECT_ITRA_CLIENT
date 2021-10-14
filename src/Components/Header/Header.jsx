import React, { useState, useContext } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from './logo.jpg'
import { Link } from "react-router-dom";
import LogModal from "./LogModal";
import SignModal from "./SignModal";
import { AuthContext } from "../../helpers/AuthContext";
import { useHistory } from 'react-router';
import Toggler from "../../Theme/Toggler";

const Header = (props) => {

    const history = useHistory()
    
    const [showSigh, setShowSign] = useState(false);
    const [showLog, setShowLog] = useState(false)

    const handleCloseLog = () => setShowLog(false)
    const handleShowLog = () => setShowLog(true)

    const handleCloseSign = () => setShowSign(false)
    const handleShowSign = () => setShowSign(true)

    const { authState, setAuthState } = useContext(AuthContext)

    const logOut = () => {
        localStorage.removeItem("accessToken")
        setAuthState({ username: "", id: 0, status: false }) 
        history.push(`/`)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Log"
                        /> Final Project
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto w-100">
                            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                            <Nav.Link as={Link} to="/problems">Задачи</Nav.Link>
                            {authState.status ? (
                                <>
                                    <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
                                    <Nav.Link as={Link} to="/admin">Админка</Nav.Link>
                                </>
                            ):
                            <></>}
                        <Toggler  theme={props.theme} toggleTheme={props.themeToggler}/>
                        <Button className="ms-2" variant = "outline-secondary">Язык</Button>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="ms-20"
                            />
                            <Button variant="outline-secondary" className="ms-2">Поиск</Button>
                        </Form>
                        {!authState.status ? (
                            <>
                                <Button variant="outline-secondary" className="ms-5" onClick={handleShowSign}>Зарегистрироваться</Button>
                                <Button variant="outline-secondary" className="ms-2" onClick={handleShowLog}>Войти</Button>
                            </>
                        )
                            : (
                                <Button variant="outline-secondary" className="ms-2" onClick={logOut}>Выйти</Button>
                            )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <LogModal className='modal' show={showLog} onHide={() => handleCloseLog()} />
            <SignModal show={showSigh} onHide={() => handleCloseSign()} />
        </>
    )
}

export default Header