import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Typography, Button, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../functions/httpRequests/httpRequests";

const { Text, Link } = Typography;

const App = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [tokens, setTokens] = useState({});

  const navigate = useNavigate();

  function onFinish(e) {
    console.log("Received values of form: ", e);
    // e.preventDefault();
    console.log("submit");
    //validate

    // call to api
    const { accessToken, refreshToken } = login(e.email, e.password);

    // store accesstoken
    setTokens({ accessToken, refreshToken });
    console.log(tokens);

    // redirect to /home

    navigate("/home");
  }

  return (
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
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          //href="/home"
        >
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default App;
