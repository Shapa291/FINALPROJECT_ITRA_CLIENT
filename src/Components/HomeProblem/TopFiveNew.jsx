import React, { useContext } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import classes from './TopFiveNew.module.css'
import { ProblemsContext } from "../../helpers/ProblemsContext";

const TopFiveNew = () => {

    const { problemState } = useContext(ProblemsContext)
    let history = useHistory()

    const solveProblem = (id) => {
        history.push(`/problems/${id}`)
    }
    return (
        <>
            <Accordion className={classes.body} >
                <h3 className="mb-3">ТОП-5 Самых свежих</h3>
                {problemState.map((value, key) => {
                    return (
                        <Accordion.Item key={value.id} eventKey={value.id}>
                            <Accordion.Header >
                                <h5>{value.id}</h5>
                                <h5 className="ms-5">Название: {value.name} </h5>
                                <div className="ms-5">Дата создания {value.createdAt.slice(0, 10)}</div>
                                <h6 className="ms-5">Рейтинг: {value.rate}</h6>
                            </Accordion.Header>
                            <Accordion.Body className='accordion'>
                                <h6>Тема: {value.theme}</h6>
                                <div>Условие: {value.condition}</div>
                                <Button className="mt-3" variant="outline-secondary" size="sm" onClick={() => solveProblem(value.id)}>Решить</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}

            </Accordion>
        </>
    )
}

export default TopFiveNew
