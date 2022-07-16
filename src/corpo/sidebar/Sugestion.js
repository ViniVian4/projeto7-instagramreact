import React from "react"

export default function Sugestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.photo} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.motive}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}