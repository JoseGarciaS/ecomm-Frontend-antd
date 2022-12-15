import React from 'react';
import { Button, Space, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

const App = () => (
    <Space wrap>
        <a href="/cart">
            <Button type="primary">
                <Text style={{ color: 'white' }}>
                    <ShoppingCartOutlined />
                    Cart (-)
                </Text>
            </Button>
        </a>
    </Space>
);
export default App;
