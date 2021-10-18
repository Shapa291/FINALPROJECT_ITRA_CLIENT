import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { PostLogUser, PostSignUser } from '../../API/API'
import { AuthContext } from '../../helpers/AuthContext'

const GoogleAuth = (props) => {

    const { setAuthState } = useContext(AuthContext)

    const responseGoogle = (googleObject) => {
        const data = googleObject.profileObj
        const newUser = {
            username: data.email,
            password: data.googleId,
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
        <GoogleLogin
            clientId="254748295715-7tbi9pj92e31h8r0r18moqnph5qb5a97.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleAuth
