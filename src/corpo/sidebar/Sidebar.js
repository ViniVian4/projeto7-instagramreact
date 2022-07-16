import React from "react"
import Sugestions from "./Sugestions"
import User from "./User"

export default function Sidebar() {
    const user = {
        userPhoto: "assets/img/catanacomics.svg",
        userName: "catanacomics",
        name: "Catana"
    };
    
    return (
        <div class="sidebar">
            <User userPhoto={user.userPhoto} userName={user.userName} name={user.name} />
            <Sugestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}