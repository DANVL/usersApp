import React, {useEffect, useState} from "react";
import {User} from "./User";
import {UserTableComponent} from "../user-table/UserTableComponent";
import {IconLoader, IconPlus} from "../icons/Icons";
import {deleteUserRequest, getAllUsersRequest, saveUserRequest} from "../../rest";
import {UserControlsCreationComponent} from "../user-controls/UserControlsCreationComponent";

export const UserComponent = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const [userCreationModalOpen, setUserCreationModalOpen] = useState<boolean>(false)

    const initUsers = () => {
        getAllUsersRequest()
            .then(resp => resp.json().then(data => {
                setUsers(data);
                setLoading(false);
            }));
    }

    useEffect(() => {
        initUsers();
    }, []);

    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
        deleteUserRequest(id)
            .then(() => {})
            .catch(() => alert("Error while deleting user"));
    }

    const saveUser = (user: User) => {
        saveUserRequest(user)
            .then(() => initUsers())
            .catch(() => alert("Error while saving user"));
        setUserCreationModalOpen(false);
    }

    return (
        <div>
            <h1>Users Table UI</h1>
            <br/>
            <br/>
            {
                loading
                ? <IconLoader />
                : <div>
                        <UserTableComponent users={users} onDelete={deleteUser}/>
                        <IconPlus onClick={() => setUserCreationModalOpen(!userCreationModalOpen)} />
                  </div>
            }
            {userCreationModalOpen && (
                <UserControlsCreationComponent
                    close={() => setUserCreationModalOpen(false)}
                    save={saveUser}
                />
            )}

        </div>
    );
}