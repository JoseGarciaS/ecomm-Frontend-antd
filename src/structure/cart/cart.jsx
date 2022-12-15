import React, { useState, useEffect } from 'react';
import { Avatar, List, Image, Card, Typography, Button } from 'antd';
import { useSelector } from 'react-redux';
import CartCard from '../../components/cartCard';
import Header from '../header';
import { Layout } from 'antd';
import { getOrder } from '../../functions/httpRequests/httpRequests';
const { Content } = Layout;

function App(props) {
    const user = useSelector((state) => state.user).value;
    const cart = useSelector((state) => state.cart).value;

    console.log(user);
    console.log('ORDEN', cart);
    const [storedItems, setItems] = useState([]);

    useEffect(() => {
        const newArr = [];
        cart.then(function (result) {
            console.log('items', result);
            for (let i = 0; i < result.items.length; i++) {
                console.log('ITERACION', i);
                newArr.push(result.items[i]);
            }
        });

        console.log('ARREGLOOOO', newArr);
        setItems(newArr);
    }, [cart]);

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
                    {storedItems.map((item) => (
                        <CartCard {...item} />
                    ))}
                </List>
                ), (<Button> Purchase</Button>)
            </Content>
        </div>
    );
}

export default App;
