import {UserColumnKey, userColumnKeys} from "./UserColumnKey";

export const UserTableHeaderComponent = () => {

    const renderHeaderCell = (key: UserColumnKey) => {
        switch (key) {
            case UserColumnKey.actions:
                return "Actions";
            case UserColumnKey.contact:
                return "Contact";
            case UserColumnKey.location:
                return "Location"
            case UserColumnKey.phone:
                return "Phone"
            case UserColumnKey.status:
                return "Status";
            case UserColumnKey.user:
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