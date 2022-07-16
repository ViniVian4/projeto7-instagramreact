import React from "react"
import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            userPhoto: "assets/img/meowed.svg",
            userName: "meowed",
            image: "assets/img/gato-telefone.svg",
            userLikedPhoto: "assets/img/respondeai.svg",
            userLikedName: "respondeai",
            likes: "101.523"
        },
        {
            userPhoto: "assets/img/barked.svg",
            userName: "barked",
            image: "assets/img/dog.svg",
            userLikedPhoto: "assets/img/adorable_animals.svg",
            userLikedName: "adorable_animals",
            likes: "99.159"
        }
    ]

    return (
        <div class="posts">
            {
                posts.map(post => (
                    <Post userPhoto={post.userPhoto} userName={post.userName} image={post.image} userLikedPhoto={post.userLikedPhoto} userLikedName={post.userLikedName} likes={post.likes} />
                ))
            }
        </div>
    )
}