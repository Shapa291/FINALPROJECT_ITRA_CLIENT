import React, {useContext} from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { DeleteProblem, GetAllProblems } from "../../../../API/API";
import classes from './Toolbar.module.css'
import { ProblemsContext } from "../../../../helpers/ProblemsContext";
const Toolbar = (props) => {

    const {setProblemState} = useContext(ProblemsContext)

    let history = useHistory()
    const deleteProblem = (id) => {
      DeleteProblem(id).then((response) => {
            alert(response);
            GetAllProblems().then((responsee) => {
                setProblemState(responsee);
            });
        })
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
                <Button variant="outline-secondary" onClick={() => {updateProblem(props.problemId)}} >Редактировать задачу</Button>
                <Button variant="outline-secondary" onClick={() => { deleteProblem(props.problemId) }}>Удалить задачу</Button>
                <Button variant="outline-secondary" onClick={() => { readProblem(props.problemId) }}>Режим просмотра задачи</Button>
            </ButtonGroup>
        </div>
    )
}

export default Toolbar