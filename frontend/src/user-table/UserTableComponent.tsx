import {User} from "../user/User";
import {UserTableRowsComponent} from "./UserTableRowsComponent";
import {UserTableHeaderComponent} from "./UserTableHeaderComponent";
import {userColumnKeys} from "./UserColumnKey";

interface OwnProps {
    users: User[];
    onDelete: (id: number) => void;
}

export const UserTableComponent = (props: OwnProps) => {

    return (
        <table className={"table table-borderless"}>
            <UserTableHeaderComponent/>
            {
                props.users.length
                    ? <UserTableRowsComponent users={props.users} onDelete={props.onDelete}/>
                    : (
                        <tbody>
                            <tr>
                                <td colSpan={userColumnKeys.length} className={"no-users"}>No users found</td>
                            </tr>
                        </tbody>
                    )
            }
        </table>
    );
}