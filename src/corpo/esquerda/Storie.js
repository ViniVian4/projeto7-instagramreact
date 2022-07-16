import React from "react"

export default function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.photo} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}