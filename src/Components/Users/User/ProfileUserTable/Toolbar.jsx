import React, { useContext } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { DeleteProblem, GetAllProblems } from "../../../../API/API";
import classes from './Toolbar.module.css'
import { ProblemsContext } from "../../../../helpers/ProblemsContext";
import { useTranslation } from "react-i18next";

const Toolbar = (props) => {

    const { t } = useTranslation()

    const { setProblemState } = useContext(ProblemsContext)

    let history = useHistory()
    const deleteProblem = (id) => {
        DeleteProblem(id)
            .then(() => GetAllProblems())
            .then((response) => setProblemState(response))
        props.setToolbarVisibility(false)
    }

    const readProblem = (id) => {
        history.push(`/problems/${id}`)
    }

    const updateProblem = (id) => {
        history.push(`/profile/${id}`)
    }

    return (
        <div className={classes.tools}>
            <ButtonGroup aria-label="Toolbar">
                <Button variant="outline-secondary" onClick={() => { updateProblem(props.problemId) }} >{t("userprofile.toolbar.update")}</Button>
                <Button variant="outline-secondary" onClick={() => { deleteProblem(props.problemId) }}>{t("userprofile.toolbar.delete")}</Button>
                <Button variant="outline-secondary" onClick={() => { readProblem(props.problemId) }}>{t("userprofile.toolbar.browse")}</Button>
            </ButtonGroup>
        </div>
    )
}

export default Toolbar