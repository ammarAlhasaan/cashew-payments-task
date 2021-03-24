import React, {FunctionComponent, useEffect} from 'react';
import {Router, Link, Redirect, Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {history} from "../../helpers/history";
import {clearMessage} from "../../redux/Message/message.actions";
import {logout} from "../../redux/Auth/auth.actions";
// import Profile from "../../pages/home/Profile";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";

type HeaderProps = {
    id?: string,
}
const UnauthenticatedLayout: FunctionComponent<HeaderProps> = ({id, children}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);


    return (
        <Router history={history}>
            <Routes/>
        </Router>)
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Redirect to="/login"/>
            </Switch>
        </div>
    )
}

export default UnauthenticatedLayout
