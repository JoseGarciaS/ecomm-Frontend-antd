import React from 'react';
import { Button, Space, Typography, Form } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setCart } from '../../functions/cartSlice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Text } = Typography;

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user).value;
    const cart = useSelector((state) => state.cart).value;
    const navigate = useNavigate();

    function onFinish(e) {
        dispatch(setCart(cart, user.email));
        navigate('/cart');
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
                >
                    <Text style={{ color: 'white' }}>
                        <ShoppingCartOutlined />
                        Cart (-)
                    </Text>
                </Button>
            </Space>
        </Form>
    );
};
export default App;
