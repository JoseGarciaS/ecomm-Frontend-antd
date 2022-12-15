import React from 'react';
import { Layout, Menu, theme, Col, Row, Typography } from 'antd';
import SearchBox from '../../components/navSearchbox';
import HomeBtn from '../../components/buttons/home';
import UserBtn from '../../components/buttons/user';
import CartBtn from '../carts';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;
const { Text, Link } = Typography;

const App = () => {
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <Row align="middle">
                    <Col span={4}>
                        <HomeBtn />
                    </Col>
                    <Col span={4}>
                        <SearchBox />
                    </Col>
                    <Col span={4}>
                        <UserBtn />
                    </Col>
                    <Col span={4}>
                        <NavLink to="/cart">
                            <CartBtn />
                        </NavLink>
                    </Col>
                </Row>
            </Header>
        </Layout>
    );
};
export default App;
