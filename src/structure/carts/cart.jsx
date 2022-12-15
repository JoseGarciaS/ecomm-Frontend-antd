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
    const navigate = useNavigate();
    const email = user.email;

    console.log('Aqui deberia venir el user', user);

    function onClick() {
        console.log('Correo boton', email);
        dispatch(setCart(email));
        navigate('/cart');
    }
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
        >
            <Space wrap>
                <Button type="primary" onClick={onClick}>
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
