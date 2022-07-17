import React from 'react'

export default function Post(props) {
    const [like, setLike] = React.useState("heart-outline");
    const [color, setColor] = React.useState("");

    function likePost () {
        if (like == "heart-outline"){
            setLike("heart");
            setColor("md hydrated red");
        }
        else {
            setLike("heart-outline");
            setColor("md hydrated");
        }
    }
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userPhoto}/>
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.image} onClick={() => {setLike("heart"); setColor("md hydrated red");}} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={color} name={like} onClick={likePost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.userLikedPhoto} />
                    <div class="texto">
                        Curtido por <strong>{props.userLikedName}</strong> e outras <strong>{props.likes}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}