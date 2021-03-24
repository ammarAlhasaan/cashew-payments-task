import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {email, minLength8, required} from "../../helpers/validation";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

type AuthFormProps = {
    title: 'Login' | 'Register',
    type: 'login' | 'register',
    handleSubmit: any,
    message: string,
    successful: boolean
}
let AuthForm: any = ({title, handleSubmit, type, message, successful}: AuthFormProps) => {

    const renderInput = (formProps: any) => {
        const {
            input, placeholder, type,
            meta: {touched, error}
        } = formProps
        return <div className="uk-margin">
            <input className={error ? "uk-input uk-form-danger" : "uk-input "}
                   {...input} placeholder={placeholder}
                   type={type}/>
            {touched && <p className="uk-text-danger">{error}</p>}
        </div>
    }
    return (
        <div className="uk-container-small" style={{margin: "auto", padding: 60}}>
            <form onSubmit={handleSubmit}>
                <fieldset className="uk-fieldset">

                    <legend className="uk-legend">{title}</legend>
                    {type === 'register' &&
                    <Field
                      name="name"
                      component={renderInput}
                      type="text"
                      placeholder="Enter your name"/>
                    }
                    <Field
                        name="email"
                        component={renderInput}
                        type="email"
                        validate={[email, required]}
                        autocomplete="off"
                        placeholder="Enter your email"/>
                    <Field
                        name="password"
                        component={renderInput}
                        type="password"
                        validate={[minLength8, required]}

                        placeholder="Enter your password"/>
                    <button className="uk-button uk-button-default" type="submit">{title}</button>

                    {type === 'register' && <p>You Dont Have an Account?
                      <Link id="Login" to="/login">
                        Login
                      </Link>
                    </p>}
                    {type === 'login' && <p>You Dont Have an Account?
                      <Link id="Register" to="/register">
                        Register
                      </Link>
                    </p>}


                    {message && (
                        <div className={successful ? "uk-alert-success " : " uk-alert-danger"} uk-alert="true">
                            <a className="uk-alert-close" uk-close="true"></a>
                            <p>{message}</p>
                        </div>
                    )}
                </fieldset>
            </form>
        </div>
    )
}

AuthForm = reduxForm({
    form: 'Login'
})(AuthForm);

export default AuthForm
