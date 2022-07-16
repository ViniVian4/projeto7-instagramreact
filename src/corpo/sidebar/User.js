import React from "react"

export default function User(props) {
    return (
        <div class="usuario">
                <img src={props.userPhoto} />
                <div class="texto">
                    <strong>{props.userName}</strong>
                    {props.name}
                </div>
            </div>
    )
}