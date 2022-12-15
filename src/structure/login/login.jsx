import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography, Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../functions/httpRequests/httpRequests';
import { useDispatch } from 'react-redux';
import { setUser } from '../../functions/productSlice copy/userSlice';
import { useSelector } from 'react-redux';
import Header from '../header';

import { Layout } from 'antd';
const { Content } = Layout;
const { Text, Link } = Typography;

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user).value;
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});
    const [tokens, setTokens] = useState({});
    console.log(user);

    const navigate = useNavigate();

    function onFinish(e) {
        console.log('Received values of form: ', e);
        // e.preventDefault();
        console.log('submit');
        //validate

        console.log(e.email);
        console.log(e.password);
        // call to api
        const { accessToken, refreshToken } = Login(e.email, e.password);

        // store accesstoken
        setTokens({ accessToken, refreshToken });
        if (accessToken != '') {
            const tempUser = { ...e, loggedIn: true };
            dispatch(setUser(tempUser));
            console.log('Entramos aqui');
            console.log(e);
        }
        console.log(tokens);

        // redirect to /home

        navigate('/home');
    }

    return (
        <div>
            <Header />
            <Content
                style={{
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginTop: '50px',
                    marginBottom: '50px',
                }}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>
                </Form>
            </Content>
        </div>
    );
};

export default App;
