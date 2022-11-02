import {UserTableColumnKey, userColumnKeys} from "./UserTableColumnKey";

export const UserTableHeaderComponent = () => {

    const renderHeaderCell = (key: UserTableColumnKey) => {
        switch (key) {
            case UserTableColumnKey.actions:
                return "Actions";
            case UserTableColumnKey.contact:
                return "Contact";
            case UserTableColumnKey.location:
                return "Location"
            case UserTableColumnKey.phone:
                return "Phone"
            case UserTableColumnKey.status:
                return "Status";
            case UserTableColumnKey.user:
                return "User";
            default:
                return undefined;
        }
    }

    return (
        <thead>
            <tr>
                {userColumnKeys.map(key => <th key={key}>{renderHeaderCell(key)}</th>)}
            </tr>
        </thead>
    );
}