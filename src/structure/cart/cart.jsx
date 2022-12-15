import React, { useState, useEffect } from 'react';
import { Avatar, List, Image, Card, Typography, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartCard from '../../components/cartCard';
import Header from '../header';
import { setCart } from '../../functions/cartSlice/cartSlice';
import { Layout } from 'antd';
import { getOrder } from '../../functions/httpRequests/httpRequests';
const { Content } = Layout;

function App(props) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user).value;
    const order = getOrder('carlos_unc@unitec.edu');
    const newArr = [];

    console.log(user);
    console.log('ORDEN', order);
    const [storedItems, setItems] = useState([]);

    useEffect(() => {
        order.then(function (result) {
            console.log('items', result.items[0]);
            for (let i = 0; i < result.items.length; i++) {
                console.log('ITERACION', i);
                newArr.push(result.items[i]);
            }
        });

        console.log('ARREGLOOOO', newArr);
        setItems(newArr);
    }, []);

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
                (
                <List itemLayout="horizontal">
                    {newArr.map((item) => (
                        <CartCard {...item} />
                    ))}
                </List>
                ), (<Button> Purchase</Button>)
            </Content>
        </div>
    );
}

export default App;
