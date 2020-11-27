import React from 'react'
import logo from './logo.png'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            })
        
    }


    return (
        <div className="login">
            <div className="login_container">
                <img src={logo} alt="Logo" />
                <h1>alivesince97.slack.com</h1>
                <p>Sign in to my app</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

export default Login 
