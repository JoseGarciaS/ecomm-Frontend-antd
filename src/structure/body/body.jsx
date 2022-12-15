import React from 'react';
import { Layout } from 'antd';
import HomePage from '../../structure/home';
import LoginPage from '../../structure/login';
import RegisterPage from '../register';
import CartPage from '../../structure/cart';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
]);

const App = (props) => {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
};
export default App;
