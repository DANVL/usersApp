import {User} from "../components/user/User";

export const getAllUsersRequest = () => fetch("/users");

export const deleteUserRequest = (id: number) =>
    fetch(`/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

export const saveUserRequest = (user: User) =>
    fetch(`/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });