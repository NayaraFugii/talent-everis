import React, { useState } from 'react';
import ButtonApp from './Button'
import firebase  from '../firebase'
import TextArea from './Text'
import share from '../img/share.png'
import ImgComment from '../img/comment.png'
import like from '../img/like.png'
import avatar from '../img/avatar.png'


const db = firebase.firestore(); 
const userName = localStorage.getItem("user")
const userId = localStorage.getItem("uid")


const Tweets = ({posts}) => {  
    
    const [countLike, setCountLike] = useState(0)
    const [comment, setComment] = useState({
        postId:'',
        comment: '', 
    })  

    const newComment = async (id)=>{       
        await db.collection("post").doc(id).set({
            coment: comment ,
            userName: userName
       }, { merge: true })
       console.log(userName, comment)

    }

    const likePost = async (id) => {
        await db.collection("post").doc(id).update({
            likes: firebase.firestore.FieldValue.arrayUnion(userId),
            like: firebase.firestore.FieldValue.increment(1),
        })
            //like: countLike +1,
        //}, { merge: true })
        console.log( countLike, setCountLike)
    };

    return (
        <div className="ContainerTweets">
            <ul>
                {posts && posts.map(post => {
                    return (
                    <div className="tweets" key={post.id}>
                        <div className="profileData"> 
                            <img src={avatar} alt="" className="profileAvatar"/>
                            <h3 className="postUser">
                            {post.data.user}</h3>
                        </div>
                        <p className="postText">{post.data.text}</p> 
                        <div className="comentFix"> 
                            <p className="dataName">{post.data.userName}</p>
                            <p className="dataComent">{post.data.coment.comment}</p> 
                        </div> 
                        <div className="boxComent"> 
                        <TextArea 
                            textClassName="textComent"
                            textPlaceholder="Comentar"
                            textOnChange={(event) => setComment({postId: post.postId, comment: event.target.value})}
                            textType= "text"
                            />
                        </div>
                            <ButtonApp
                            buttonOnClick = {()=>{newComment(post.postId)}}
                            buttonImage= {ImgComment}
                            btnClassName="btnTweets"
                            />   
                        <div className='btns'>
                            <ButtonApp
                                buttonOnClick = {newComment} 
                                buttonImage= {ImgComment}
                                btnClassName="btnTweets"
                            />      
                            <ButtonApp
                                // buttonOnClick = {logout}
                                buttonImage= {share}
                                btnClassName="btnTweets"
                            /> 
                            <p className="postText">{post.data.like}</p>   
                            <ButtonApp
                                buttonOnClick = {()=>{likePost(post.postId)}}
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