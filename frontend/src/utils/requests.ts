
export const getAllUsersRequest = () => fetch("/users");

export const deleteUserRequest = (id: number) =>
    fetch(`/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });