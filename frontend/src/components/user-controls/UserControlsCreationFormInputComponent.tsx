import {FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {InputType} from "reactstrap/lib/Input";

interface OwnProps {
    id: string
    label: string;
    type: InputType;
    placeholder: string;
    valid: boolean;
    validated: boolean;
    feedback: string;
    value: any;
    onChange: (value: string) => void;
}

export const UserControlsCreationFormInputComponent = (props: OwnProps) => {
    return <FormGroup>
        <Label for={props.id}>
            {props.label}
        </Label>
        <Input
            valid={props.valid}
            invalid={props.validated && !props.valid}
            id={props.id}
            name={props.id}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
        />
        {
            props.validated && !props.valid && (
                <FormFeedback>
                    {props.feedback}
                </FormFeedback>
            )
        }
    </FormGroup>
}