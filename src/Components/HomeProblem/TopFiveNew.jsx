import React, { useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import classes from './Tops.module.css'
import { ProblemsContext } from "../../helpers/ProblemsContext";
import TopsContent from './TopsContent';
import { useTranslation } from 'react-i18next';

const TopFiveNew = () => {

    const { t } = useTranslation()

    const { problemState } = useContext(ProblemsContext)

    return (
        <Accordion className={classes.body} >
            <h3 className="mb-3">{t("homepage.top5new")}</h3>
            {problemState
                .sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
                .slice(-5)
                .reverse()
                .map((value) => {
                    return (
                        <TopsContent key={value.id} value={value} />
                    )
                })}
        </Accordion>
    )
}

export default TopFiveNew
