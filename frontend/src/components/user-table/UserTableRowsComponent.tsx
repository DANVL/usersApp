import {User} from "../user/User";
import {UserTableColumnKey, userColumnKeys} from "./UserTableColumnKey";
import {Button} from "reactstrap";
import {UserControlsDropDownComponent} from "../user-controls/UserControlsDropDownComponent";
import {IconStatus} from "../icons/Icons";
import {Status} from "../../Enums";

interface OwnProps {
    users: User[];
    onDelete: (id: number) => void;
}

export const UserTableRowsComponent = (props: OwnProps) => {
    const renderRowCell = (user: User, key: UserTableColumnKey) => {
        switch (key) {
            case UserTableColumnKey.user:
                return (
                    <div className={"UserInfo"}>
                        <div>
                            <img
                                src={require("../../resources/logo192.png")}
                                alt={undefined}
                                className={"UserInfo__image"}
                            />
                        </div>
                        <div>
                            <h5 className={"mb-0"}>{user.fullName}</h5>
                            <p className={"mb-0"}>{`@${user.username}`}</p>
                        </div>
                    </div>
                );
            case UserTableColumnKey.status:
                const status: Status = Status[user.status as keyof typeof Status];
                return <><IconStatus status={status} />{status}</>;
            case UserTableColumnKey.location:
                return user.location;
            case UserTableColumnKey.phone:
                return `+${user.phone}`;
            case UserTableColumnKey.contact:
                return <Button color="primary" size="sm">Contact</Button>;
            case UserTableColumnKey.actions:
                return <UserControlsDropDownComponent onDelete={() => props.onDelete(user.id as number)} />;
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