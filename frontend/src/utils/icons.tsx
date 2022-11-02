import React from "react";
import {Status} from "../Enums";

export const IconMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg"
         transform="scale(1.25)"
         width="16" height="16" fill="currentColor"
         className="bi bi-three-dots-vertical" viewBox="-6 0 16 16">
        <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
);

export const IconLoader = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
        <path
            d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
        <animateTransform attributeType="xml" attributeName="transform" type="rotate"
                          from="360 8.4 9.5" to="0 8.4 9.5" dur="0.5s" additive="sum" repeatCount="indefinite" />
    </svg>
);

export const IconStatus = (props: {status: Status}) => {
    console.log(typeof props.status);
    return <svg xmlns="http://www.w3.org/2000/svg"
         transform="scale(3)"
         color={props.status === Status.ACTIVE ? "green" : "red"}
         width="16" height="16" fill="currentColor"
         className="bi bi-dot" viewBox="2 0.25 16 16">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </svg>
}

export const IconBin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-trash-fill" viewBox="0 0 16 16">
        <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>
)

export const IconEdit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path
            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
    </svg>
)

export const IconPlus = () => (
    <svg style={{paddingLeft: "0.5rem"}} xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor"
         className="bi bi-plus-circle-fill" viewBox="0 0 16 16" transform="scale(2)">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
    </svg>
)