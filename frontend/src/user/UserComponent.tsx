import React, {useEffect, useState} from "react";
import {User} from "./User";
import {UserTableComponent} from "../user-table/UserTableComponent";
import {IconLoader, IconPlus} from "../utils/icons";
import {deleteUserRequest, getAllUsersRequest} from "../utils/requests";

export const UserComponent = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        console.log(1)
        getAllUsersRequest()
            .then(resp => resp.json().then(data => {
                setUsers(data);
                setLoading(false);
            }));
    }, []);

    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
        deleteUserRequest(id)
            .then(() => {})
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
                        <IconPlus />
                  </div>
            }

        </div>
    );
}