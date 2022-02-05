import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';
import routes from '../routes';
import { GlobalStyle } from './Global/Styled';

const App = ({ onGetCurrentUser }) => {
    const isAuth = useSelector(state => state.auth.token);

    useEffect(() => {
        onGetCurrentUser();
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Layout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        {routes.map(route =>
                            route.private ? (
                                <PrivateRoute key={route.label} {...route} />
                            ) : (
                                <PublicRoute key={route.label} {...route} />
                            ),
                        )}
                        <Route path="/">
                            {isAuth ? (
                                <Redirect to="/profile" />
                            ) : (
                                <Redirect to="/login" />
                            )}
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);
