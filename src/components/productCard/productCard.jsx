import React from 'react';
import { Card, Skeleton, Image, Col, Button } from 'antd';
import { addItemToOrder } from '../../functions/httpRequests/httpRequests';
import { useSelector } from 'react-redux';
import { Form } from 'antd';
const { Meta } = Card;

const App = (props) => {
    const user = useSelector((state) => state.user).value;

    function onFinish(e) {
        console.log(props);
        addItemToOrder(user.email, props);
    }
    return (
        <Col>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Card
                    hoverable
                    loading={false}
                    style={{
                        width: 240,
                        marginBottom: 50,
                    }}
                    cover={<Image width={240} src={props.imagePath} />}
                >
                    <Meta
                        title={props.name}
                        description={'Price: ' + props.price}
                    />
                    <Button
                        htmlType="submit"
                        className="login-form-button"
                        style={{ marginTop: 20 }}
                    >
                        Add to cart
                    </Button>
                </Card>
            </Form>
        </Col>
    );
};

export default App;
