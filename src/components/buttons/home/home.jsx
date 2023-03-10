import React from 'react';
import { Button, Space, Typography, Form } from 'antd';
import { AmazonOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Title, Paragraph, Text, Link } = Typography;

const App = () => {
    const navigate = useNavigate();

    function onFinish(e) {
        navigate('/');
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
            <Space wrap>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    icon={<AmazonOutlined spin={true} />}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Text style={{ color: 'white' }}>Bootleg Amazon</Text>
                </Button>
            </Space>
        </Form>
    );
};
export default App;
