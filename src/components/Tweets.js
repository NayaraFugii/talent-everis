import React, { useEffect, useState } from 'react';
import ButtonApp from './Button'
import firebase  from '../firebase'

const db = firebase.firestore(); 

const Tweets = () => {  

    const [posts, setPosts] = useState()

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const response = await db.collection("post").get()
        const result = response.docs.map(item => item.data())
        setPosts(result)
    }

    return (
        <div>
            <ul>
                {posts && posts.map(post => {
                    return (
                    <div key={post.id}>
                    <h3>{post.user}</h3>
                    <p>{post.text}</p>
                    <ButtonApp buttonText='curtir' />
                    <ButtonApp buttonText='retweetar' />
                    <ButtonApp buttonText='comentar' />

                    </div>)
                })}
            </ul>     
        </div>
      )

}

export default Tweets