import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";


const RouterComponent = () => {
    return (
        <Router >
            <Scene key="root">
                <Scene key="auth" hideNavBar={1}>
                    <Scene key="login" component={LoginForm}/>
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;
