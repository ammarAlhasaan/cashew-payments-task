import React, {FunctionComponent, useEffect} from 'react';
import {Router, Link, Redirect, Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {history} from "../../helpers/history";
import {clearMessage} from "../../redux/Message/message.actions";
import {logout} from "../../redux/Auth/auth.actions";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";

type HeaderProps = {
    id?: string,
}
const AuthenticatedApp: FunctionComponent<HeaderProps> = ({id, children}) => {

    const {user: currentUser} = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);


    const logOut = () => {
        dispatch(logout());
    };
    if (!currentUser) {
        return <Redirect to="/login"/>;
    }
    return (
        <Router history={history}>
            <nav className="uk-navbar-container "
                 uk-navbar="true">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.name}
                            </Link>
                        </li>
                        <li>
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
            <Routes/>
        </Router>)
}

function Routes() {
    return (
        <div className="uk-container-small" style={{margin: "auto", padding: 32}}>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </div>
    )
}

// function AuthenticatedApp1() {
//     const user = useUser()
//     const {logout} = useAuth()
//     return (
//         <div>
//             <div>
//                 <div>
//                     {user.username}
//                     <button
//                         onClick={logout}
//                         css={{
//                             marginLeft: '10px',
//                         }}
//                     >
//                         Logout
//                     </button>
//                 </div>
//                 <Nav/>
//             </div>
//             <main css={{width: '100%'}}>
//                 <Routes/>
//             </main>
//             <footer/>
//         </div>
//     )
// }
//
//
// function Nav(params) {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <a to="/list">Reading List</a>
//                 </li>
//                 <li>
//                     <a to="/finished">Finished Books</a>
//                 </li>
//                 <li>
//                     <a to="/discover">Discover</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
//
// function RedirectHome() {
//     return <Redirect to="/list"/>
// }
//
// function NotFound() {
//     return <div>Not found</div>
// }


export default AuthenticatedApp
