import * as React from 'react'
// import AuthenticatedApp from "./components/authenticated-app";
// import UnauthenticatedApp from "./components/unauthenticated-app";
import {useSelector} from "react-redux";
import AuthenticatedApp from "./components/layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./components/layouts/UnauthenticatedLayout";

// const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
// const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
    const {user: currentUser} = useSelector((state: any) => state.auth);

    // const user = useUser()
    return currentUser ? <AuthenticatedApp/> : <UnauthenticatedLayout/>
}

export default App
