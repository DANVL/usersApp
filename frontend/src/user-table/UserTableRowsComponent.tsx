import {User} from "../user/User";
import {UserColumnKey, userColumnKeys} from "./UserColumnKey";
import {Button} from "reactstrap";
import {UserControlsDropDownComponent} from "./UserControlsDropDownComponent";
import {IconStatus} from "../utils/icons";
import {Status} from "../Enums";

interface OwnProps {
    users: User[];
    onDelete: (id: number) => void;
}

export const UserTableRowsComponent = (props: OwnProps) => {

    const renderRowCell = (user: User, key: UserColumnKey) => {
        switch (key) {
            case UserColumnKey.user:
                return (
                    <div className={"user-info"}>
                        <div className={"user-info__img"}><img src={"logo192.png"} alt={""}/></div>
                        <div className={"user-info__basic"}>
                            <h5 className={"mb-0"}>{user.fullName}</h5>
                            <p className={"mb-0"}>{`@${user.username}`}</p>
                        </div>
                    </div>
                );
            case UserColumnKey.status:
                const status: Status = Status[user.status as keyof typeof Status];
                return (
                    <div>
                        <IconStatus status={status} />
                        {status}
                    </div>
                );
            case UserColumnKey.location:
                return user.location;
            case UserColumnKey.phone:
                return `+${user.phone}`;
            case UserColumnKey.contact:
                return <Button color="primary" size="sm">Contact</Button>;
            case UserColumnKey.actions:
                return <UserControlsDropDownComponent onDelete={() => props.onDelete(user.id)} />;
            default:
                return undefined;
        }
    }

    const renderRow = (user: User) => (
        <tr key={user.id}>
            {userColumnKeys.map(key => <td key={key}>{renderRowCell(user, key)}</td>)}
        </tr>
    );

    return <tbody>{props.users.map(user => renderRow(user))}</tbody>;
}