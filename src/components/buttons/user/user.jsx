import React from "react";
import { Button, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const App = () => (
  <Space wrap>
    <a href="/login">
      <Button type="primary">
        <UserOutlined />
        <Text style={{ color: "white" }}>Login</Text>
      </Button>
    </a>
  </Space>
);
export default App;
