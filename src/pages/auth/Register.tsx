import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux/Auth/auth.actions";
import {Redirect} from 'react-router-dom';
import AuthForm from "../../components/forms/AuthForm";
import {useHistory} from "react-router-dom";


const Register = (props: any) => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const {isLoggedIn} = useSelector((state: any) => state.auth);
    const [successful, setSuccessful] = useState(false);

    const dispatch: any = useDispatch();
    const {message} = useSelector((state: any) => state.message);


    const submit = (values: any) => {
        setSuccessful(false);
        const {name, email, password} = values;
        dispatch(register(name, email, password))
            .then(() => {
                setSuccessful(true);
                // history.push("/login")
            })
            .catch(() => {
                setSuccessful(false);
            });
    }
    if (isLoggedIn) {
        return <Redirect to="/profile"/>;
    }
    return <AuthForm message={message} successful={successful} onSubmit={submit} type="register" title="Register"/>
}

export default Register
