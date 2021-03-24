import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/Auth/auth.actions";
import {Redirect} from 'react-router-dom';
import AuthForm from "../../components/forms/AuthForm";


const Login = (props: any) => {
    const [loading, setLoading] = useState(false);
    const {isLoggedIn} = useSelector((state: any) => state.auth);

    const dispatch: any = useDispatch();
    const {message} = useSelector((state: any) => state.message);


    const submit = (values: any) => {
        setLoading(true);
        const {email, password} = values;
        dispatch(login(email, password)).then((data: any) => {
            props.history.push("/profile");
            window.location.reload();
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }
    if (isLoggedIn) {
        return <Redirect to="/profile"/>;
    }
    return <AuthForm message={message} onSubmit={submit} type="login" title="Login"/>
}

export default Login
