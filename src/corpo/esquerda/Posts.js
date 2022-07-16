import React from "react"
import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            userPhoto: "assets/img/meowed.svg",
            userName: "meowed",
            image: "assets/img/gato-telefone.svg",
            userLikedPhoto: "assets/img/respondeai.svg",
            likedText: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"
        },
        {
            userPhoto: "assets/img/barked.svg",
            userName: "barked",
            image: "assets/img/dog.svg",
            userLikedPhoto: "assets/img/adorable_animals.svg",
            likedText: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"
        }
    ]

    return (
        <div class="posts">
            {
                posts.map(post => (
                    <Post userPhoto={post.userPhoto} userName={post.userName} image={post.image} userLikedPhoto={post.userLikedPhoto} likedText={post.likedText} />
                ))
            }
        </div>
    )
}