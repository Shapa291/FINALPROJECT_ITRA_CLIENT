import React from 'react'
import classes from './Tops.module.css'
import { useHistory } from 'react-router'
import { Accordion, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const TopsContent = (props) => {

    const { t } = useTranslation()

    const value = props.value

    let history = useHistory()

    const solveProblem = (id) => {
        history.push(`/problems/${id}`)
    }

    return (
        <Accordion.Item key={value.id} eventKey={value.id} className={classes.item}>
            <Accordion.Header className="accordion">
                <h5>{value.id}</h5>
                <h5 className="ms-5">{t("homepage.name")}: {value.name} </h5>
                <div className="ms-5">{t("homepage.date")}: {value.createdAt.slice(0, 10)}</div>
                <h6 className="ms-5">{t("homepage.rate")}: {value.rate}</h6>
            </Accordion.Header>
            <Accordion.Body className='accordion'>
                <h6>{t("homepage.theme")}: {value.theme}</h6>
                <div>{t("homepage.condition")}: {value.condition}</div>
                <Button className="mt-2 s" onClick={() => solveProblem(value.id)} variant="outline-secondary" size="sm" >{t("homepage.solvebut")}</Button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default TopsContent
