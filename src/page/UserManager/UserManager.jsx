import React, { useState } from 'react'
import TopBar from '../../components/TopBar/Navbar';
import { Layout, Button } from "antd";
import '../UserManager/UserManager.css';
import UserList from './UserList';
import UserForm from './UserForm';
import AddUserForm from './AddUserForm';

const { Content } = Layout;


export const UserManager = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [users, setUsers] = useState([
        { username: "NV1", name: "Người 1", employeeId: "NV0001", status: "active" },
        { username: "NV2", name: "Người 2", employeeId: "NV0002", status: "active" },
        { username: "NV3", name: "Người 3", employeeId: "NV0003", status: "inactive" },
    ]);

    const handleUpdateUser = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.username === updatedUser.username ? updatedUser : user
            )
        );
        setSelectedUser(null);
    };

    const handleAddUser = (userData) => {
      setUsers([...users, { ...userData, status: "active" }]);
      setIsModalVisible(false);
    };

    return (
        <div>
            <TopBar />
            <div>
                <Layout style={{ padding: "20px" }}>
                    <Content>
                    <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ marginBottom: 10 }}>
                            + Người dùng
                        </Button>
                        <UserList users={users} onSelectUser={setSelectedUser} />
                        {selectedUser && <UserForm user={selectedUser} onUpdate={handleUpdateUser} />}
                        <AddUserForm visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onSave={handleAddUser} />
                    </Content>
                </Layout>
            </div>
        </div>
    )
}

export default UserManager;
