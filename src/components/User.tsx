import React from "react";
import { IUser } from "../interfaces/IUser";

const User: React.FC<IUser> = (props) => {
    return (
        <div key={props.id}>
            Name: {props.name} <br />
            Username: {props.username} <br />
            Address: {props.address.city} <br />
            Email: {props.email} <br />
            Website: {props.website} <br />
            Phone: {props.phone} <br />
            <br />
        </div>
    )
}

export default User;