import React, { useContext } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { ProblemsContext } from '../../helpers/ProblemsContext'
import classes from './TopFiveNew.module.css'

const Rate = () => {

    const { problemState } = useContext(ProblemsContext)
    let history = useHistory()
    const solveProblem = (id) => {
        history.push(`/problems/${id}`)
    }

    return (
        <Accordion className={classes.body} >
            <h3 className="mb-3">ТОП-5 Самых рейтинговых</h3>
            {problemState.map((value, key) => {
                return (
                    <Accordion.Item key={value.id} eventKey={value.id}>
                        <Accordion.Header className="">
                            <h5>{value.id}</h5>
                            <h5 className="ms-5">Название: {value.name} </h5>
                            <div className="ms-5">Дата создания {value.createdAt.slice(0, 10)}</div>
                            <h6 className="ms-5">Рейтинг: {value.rate}</h6>
                        </Accordion.Header>
                        <Accordion.Body className='accordion'>
                            <h6>Тема: {value.theme}</h6>
                            <div>Условие: {value.condition}</div>
                            <Button className="mt-2 s" onClick={() => solveProblem(value.id)} variant="outline-secondary" size="sm" >Решить</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}

export default Rate
