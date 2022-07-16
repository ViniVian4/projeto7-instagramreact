import React from 'react'
import Storie from "./Storie"

export default function Stories() {
    const stories = [
        {
            photo: "assets/img/9gag.svg",
            user: "9gag"
        },
        {
            photo: "assets/img/meowed.svg",
            user: "meowed"
        },
        {
            photo: "assets/img/barked.svg",
            user: "barked"
        },
        {
            photo: "assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"
        },
        {
            photo: "assets/img/wawawicomics.svg",
            user: "wawawicomics"
        },
        {
            photo: "assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            photo: "assets/img/filomoderna.svg",
            user: "filomoderna"
        },
        {
            photo: "assets/img/memeriagourmet.svg",
            user: "memeriagourmet"
        }
    ]
    
    return (
        <div class="stories">
            
            {
                stories.map(storie => (
                    <Storie photo={storie.photo} user={storie.user} />
                ))
            }

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}