import {
    Button,
    Form,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {useState} from "react";
import {User} from "../user/User";
import {Status} from "../../Enums";
import {UserControlsCreationFormInputComponent} from "./UserControlsCreationFormInputComponent";

interface OwnProps {
    close: () => void;
    save: (user: User) => void;
}

export const UserControlsCreationComponent = (props: OwnProps) => {
    const [validated, setValidated] = useState<boolean>(false);
    const [user, setUser] = useState<User>({
        id: undefined,
        username: "",
        fullName: "",
        location: "",
        phone: undefined,
        status: Status.ACTIVE.toUpperCase()
    });

    const valid = {
        username: (): boolean =>
            user.username !== undefined && user.username.length > 0 && user.username.length < 20,
        fullName: (): boolean =>
            user.fullName !== undefined && user.fullName.length > 0 && user.fullName.length < 72,
        location: (): boolean =>
            user.location !== undefined && user.location.length > 0 && user.location.length < 189,
        phone: (): boolean =>
            user.phone !== undefined && user.phone.toString().length > 5 && user.phone.toString().length < 16
    }

    return (
        <Modal isOpen toggle={props.close}>
            <ModalHeader toggle={props.close}>User creation</ModalHeader>
            <ModalBody>
                <Form>
                    <UserControlsCreationFormInputComponent
                        id={"username"}
                        label={"Username"}
                        type={"text"}
                        placeholder={"Your username"}
                        valid={valid.username()}
                        validated={validated}
                        feedback={"The username is empty or too long"}
                        value={user.username}
                        onChange={username => setUser({...user, username})}
                    />
                    <UserControlsCreationFormInputComponent
                        id={"fullName"}
                        label={"Full name"}
                        type={"text"}
                        placeholder={"Your full name"}
                        valid={valid.fullName()}
                        validated={validated}
                        feedback={"The full name is empty or too long"}
                        value={user.fullName}
                        onChange={fullName => setUser({...user, fullName})}
                    />
                    <UserControlsCreationFormInputComponent
                        id={"location"}
                        label={"Location"}
                        type={"text"}
                        placeholder={"Your location"}
                        valid={valid.location()}
                        validated={validated}
                        feedback={"The location is empty or too long"}
                        value={user.location}
                        onChange={location => setUser({...user, location})}
                    />
                    <UserControlsCreationFormInputComponent
                        id={"phone"}
                        label={"Phone"}
                        type={"text"}
                        placeholder={"Your phone"}
                        valid={valid.phone()}
                        validated={validated}
                        feedback={"The phone is empty or too long"}
                        value={user.phone ?? ""}
                        onChange={phone => setUser({...user, phone: Number(phone)})}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={
                        () => Object.values(valid).every(item => item())
                            ? props.save(user)
                            : setValidated(true)
                    }
                >
                    Save
                </Button>{' '}
                <Button color="secondary" onClick={props.close}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}