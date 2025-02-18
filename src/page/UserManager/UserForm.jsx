import React from "react";
import { Form, Input, Button, Switch, Card } from "antd";

const UserForm = ({ user, onUpdate }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onUpdate({ ...user, ...values });
  };

  return (
    <Card title="Chi tiết người dùng">
      <Form form={form} initialValues={user} onFinish={handleSubmit}>
        <Form.Item label="Tên đăng nhập" name="username">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Tên người dùng" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Mã nhân viên" name="employeeId">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Trạng thái" name="status" valuePropName="checked">
          <Switch checkedChildren="Đang hoạt động" unCheckedChildren="Ngừng hoạt động" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserForm;