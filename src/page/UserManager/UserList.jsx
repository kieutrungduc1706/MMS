import React, { useState } from "react";
import { Table, Button, Tag } from "antd";

const UserList = ({ users, onSelectUser }) => {
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã nhân viên",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "active" ? (
          <Tag color="green">Đang hoạt động</Tag>
        ) : (
          <Tag color="red">Ngừng hoạt động</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Button type="link" onClick={() => onSelectUser(record)}>
          Xem chi tiết
        </Button>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="username" />;
};

export default UserList;