import React from 'react';
import { Card, Skeleton, Image, Col, Button } from 'antd';
import { addItemToOrder } from '../../functions/httpRequests/httpRequests';
const { Meta } = Card;

function OnClick(e) {
    console.log(e.props);
}

const App = (props) => (
    <Col>
        <Card
            hoverable
            loading={false}
            style={{
                width: 240,
                marginBottom: 50,
            }}
            cover={<Image width={240} src={props.imagePath} />}
        >
            <Meta title={props.name} description={'Price: ' + props.price} />
            <Button onClick={OnClick} style={{ marginTop: 20 }}>
                Add to cart
            </Button>
        </Card>
    </Col>
);
export default App;
