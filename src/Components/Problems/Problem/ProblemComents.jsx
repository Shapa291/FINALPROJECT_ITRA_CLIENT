import React, { useContext, useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import classes from './Problem.module.css'
import { AuthContext } from '../../../helpers/AuthContext'
import { OneProblemContext } from '../../../helpers/OneProblemContext'
import { DeleteComment, GetComments, PostComment } from '../../../API/API'
import { useTranslation } from 'react-i18next'

const ProblemComents = () => {

    const { t } = useTranslation()

    const { authState } = useContext(AuthContext)
    const { oneProblemState } = useContext(OneProblemContext)

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    const id = oneProblemState.id

    useEffect(() => {
        GetComments(id).then((res) => {
            setComments(res)
        })
    }, [id])

    const addComment = () => {
        PostComment(newComment, id)
            .then((response) => {
                if (response.error) {
                    console.log(response.error);
                } else {
                    const commentToAdd = { commentBody: newComment, username: response.username }
                    setComments([...comments, commentToAdd])
                    setNewComment("")
                }
            })
            .then(() => GetComments(id))
            .then((response) => setComments(response))
    }
    const removeComment = (id) => {
        DeleteComment(id)
            .then(() => {
                setComments(
                    comments.filter((val) => {
                        return val.id !== id
                    }))
            })
    }

    return (
        <>
            <h2>Coments</h2>
            <InputGroup className="mt-2 mb-2">
                <Form.Control
                    placeholder={t("problem.commenttext")}
                    value={newComment}
                    as="textarea"
                    onChange={(event) => { setNewComment(event.target.value) }}
                />
            </InputGroup>
            {authState.status ?
                (
                    <Button className="ms-1" variant="outline-secondary" onClick={addComment}>{t("problem.commentbut")}</Button>
                )
                :
                (
                    <h4>{t("problem.commentauth")}</h4>
                )
            }
            <div>
                {comments.map((comment, key) => {
                    return (
                        <div key={key} className={classes.comment}>
                            <div className={classes.username}>{comment.username}</div>
                            <div >{comment.commentBody}</div>
                            {authState.username === comment.username
                                &&
                                <Button size="sm"
                                    className={classes.delete}
                                    variant="outline-secondary"
                                    onClick={() => removeComment(comment.id)}>
                                    x
                                </Button>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProblemComents