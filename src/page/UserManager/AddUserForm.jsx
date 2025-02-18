import React from "react";
import { Modal, Form, Input, Select, Checkbox, Button } from "antd";

const { Option } = Select;

const AddUserForm = ({ visible, onCancel, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields()
      .then(values => {
        console.log("Dữ liệu người dùng:", values);
        onSave(values);
        form.resetFields();
      })
      .catch(info => {
        console.log("Lỗi khi nhập:", info);
      });
  };

  return (
    <Modal
      title="Thêm người dùng"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Bỏ qua
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Tên người dùng" name="fullName" rules={[{ required: true, message: "Nhập tên người dùng!" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Tên đăng nhập" name="username" rules={[{ required: true, message: "Nhập tên đăng nhập!" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: "Nhập mật khẩu!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="Gõ lại mật khẩu" name="confirmPassword" dependencies={['password']}
          rules={[
            { required: true, message: "Nhập lại mật khẩu!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không khớp!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Vai trò" name="role" rules={[{ required: true, message: "Chọn vai trò!" }]}>
          <Select placeholder="--Chọn vai trò--">
            <Option value="admin">Quản trị viên</Option>
            <Option value="user">Nhân viên</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Ghi chú" name="note">
          <Input.TextArea rows={2} />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default AddUserForm;
