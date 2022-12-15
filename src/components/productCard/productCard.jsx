import React from "react";
import { Card, Skeleton, Image, Col } from "antd";
const { Meta } = Card;

const App = (props) => (
  <Col>
    <Card
      hoverable
      loading={false}
      style={{
        width: 240,
        marginBottom: 50,
      }}
      cover={
        //<img alt="example" src="" loading="true" />*/
        /*<Skeleton.Image
          active={true}
          style={{
            width: 240,
            height: 240,
          }}
        ></Skeleton.Image>*/
        <Image width={240} src={props.imagePath} />
      }
    >
      <Meta title={props.name} description={"Price: " + props.price} />
    </Card>
  </Col>
);
export default App;
