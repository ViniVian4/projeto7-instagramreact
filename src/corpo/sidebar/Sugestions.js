import React from "react"
import Sugestion from "./Sugestion";

export default function Sugestions() {
    const sugestions = [
        {
            photo: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            motive: "Segue você"
        },
        {
            photo: "assets/img/chibirdart.svg",
            name: "chibirdart",
            motive: "Segue você"
        },
        {
            photo: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            motive: "Novo no Instagram"
        },
        {
            photo: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            motive: "Segue você"
        },
        {
            photo: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            motive: "Segue você"
        }
    ];
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {
                sugestions.map(sugestion => (
                    <Sugestion photo={sugestion.photo} name={sugestion.name} motive={sugestion.motive} />
                ))
            }
        </div>
    )
}