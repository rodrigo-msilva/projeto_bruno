import React from "react";

import { Route, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CustomRoute({ component: Component, isClosed, ...rest}) {
    const isLogged = false;
    const navigate = useNavigate()

    if (isClosed && !isLogged){
        navigate('/login')
    }
    return(
        <Route {...rest} component={Component} />
    )
}

CustomRoute.defaultProps = {
    isClosed: false
}

CustomRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}