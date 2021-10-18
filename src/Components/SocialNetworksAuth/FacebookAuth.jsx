import React, { useContext } from 'react'
import FacebookLogin from 'react-facebook-login'
import { PostLogUser, PostSignUser } from '../../API/API'
import { AuthContext } from '../../helpers/AuthContext'

const FacebookAuth = (props) => {

    const { setAuthState } = useContext(AuthContext)

    const responseFacebook = (data) => {
        const newUser = {
            username: data.email,
            password: data.id,
            role: 0
        }
        PostSignUser(newUser)
            .then(() => PostLogUser(newUser))
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error)
                } else {
                    localStorage.setItem("accessToken", response.data.token)
                    setAuthState({ username: response.data.username, id: response.data.id, status: true })
                }
            })
        props.hide()
    }

    return (
        <FacebookLogin
            appId="1967038380128475"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
        />
    )
}

export default FacebookAuth
