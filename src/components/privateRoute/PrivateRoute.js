import React from 'react';
// import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLogin, ...Rest}) => {
    // Si está logueado le muestro el componente privado, de lo contrario lo redirijo a home (login)
    return isLogin ? <Route {...Rest} render={routeProps => <Component {...routeProps}/>}/> : <Redirect to="/" />;
};

export default PrivateRoute;
