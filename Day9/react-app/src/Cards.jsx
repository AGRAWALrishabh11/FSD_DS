import React from 'react'
import "./Card.css";


const Cards = ({user,img_url,post,likes,comment}) => {
  return (
    <div>
        <h1>User:{user}</h1>
        <img src={img_url} alt=""width={100} height={200} />
        <h2>Post{post}</h2>
        <h2>Likes{likes}</h2>
        <h2>comment{comment}</h2>
    </div>
  )
}

export default Cards