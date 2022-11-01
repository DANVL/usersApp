import React, {useEffect, useState} from "react";

export const UserComponent = () => {

    const [users, setUsers] = useState(undefined);

    useEffect(() => {
        fetch("/users")
            .then(resp => console.log(resp));
    })

    return (
        <div>
            {users ? users : "No users"}
        </div>
    );
}