import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { users } = useSelector((state) => state.usersReducer);

    if (users) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;
