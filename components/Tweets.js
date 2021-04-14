import React, { useEffect, useState } from 'react';
import ButtonApp from './Button'
import firebase  from '../firebase'
import share from '../img/share.png'
import comment from '../img/comment.png'
import like from '../img/like.png'
import avatar from '../img/avatar.png'


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
        <div className="ContainerTweets">
            <ul>
                {posts && posts.map(post => {
                    return (
                    <div className="tweets" key={post.id}>
                        <h3 className="postUser">
                        <img src={avatar} alt="" className="profileAvatar"/>
                        {post.user}</h3>
                        <p className="postText">{post.text}</p>   
                        <div className='btns'>
                            <ButtonApp
                                // buttonOnClick = {logout}
                                buttonImage= {comment}
                                btnClassName="btnTweets"
                            />      
                            <ButtonApp
                                // buttonOnClick = {logout}
                                buttonImage= {share}
                                btnClassName="btnTweets"
                            />    
                            <ButtonApp
                                // buttonOnClick = {logout}
                                buttonImage= {like}
                                btnClassName="btnTweets"
                            />    
                        </div>                          
                    </div>)
                })}
            </ul>     
        </div>
      )

}

export default Tweets