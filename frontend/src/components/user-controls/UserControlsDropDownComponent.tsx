import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";
import {IconBin, IconEdit, IconMenu} from "../icons/Icons";

interface OwnProps {
    onDelete: () => void;
}

export const UserControlsDropDownComponent = (props: OwnProps) => {
    const[dropDownOpen, setDropDownOpen] = useState(false);

    return (
        <Dropdown isOpen={dropDownOpen} toggle={() => setDropDownOpen(!dropDownOpen)}>
            <DropdownToggle color="link" className={"shadow-none"}>
                <IconMenu />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><IconEdit /> Edit</DropdownItem>
                <DropdownItem style={{color: "red"}} onClick={props.onDelete}><IconBin /> Delete</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}