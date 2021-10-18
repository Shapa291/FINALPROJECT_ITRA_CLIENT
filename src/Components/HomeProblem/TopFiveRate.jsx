import React, { useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ProblemsContext } from '../../helpers/ProblemsContext'
import classes from './Tops.module.css'
import TopsContent from './TopsContent'

const Rate = () => {

    const { t } = useTranslation()
    const { problemState } = useContext(ProblemsContext)

    return (
        <Accordion className={classes.body} >
            <h3 className="mb-3">{t("homepage.top5rate")}</h3>
            {problemState
                .sort((a, b) => (a.rate < b.rate) ? 1 : ((b.rate < a.rate) ? -1 : 0))
                .slice(0, 5)
                .map((value) => {
                    return (
                        <TopsContent key={value.id} value={value} />
                    )
                })}
        </Accordion>
    )
}

export default Rate
