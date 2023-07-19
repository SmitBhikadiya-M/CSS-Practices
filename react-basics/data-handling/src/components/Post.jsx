import React, { useRef, useState } from 'react'

export default function Post({ post, updateTitle, deletePost, getComments }) {

  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  function getCommentsHandler(postId){
    if(show) return setShow(false);
    getComments(postId).then(()=>{
      setShow(true)
    });
  }

  console.log("Post", post);

  return (
    <div className='post'>
      <h2 className='post-title' title={post.title}>{post.title}</h2>
      <p className='post-body'>{post.body}</p>
      <div className='post-action'>
        <div className='post-action-comment'>
          <input ref={inputRef} type='text' placeholder='change title to'></input>
          <button onClick={() => updateTitle({ postId: post.id, title: inputRef.current.value })}>Update</button>
        </div>
        <button className='btn-red' onClick={() => deletePost(post.id)}>delete post</button>
      </div>
      <div style={{margin:'20px'}} onClick={()=>getCommentsHandler(post.id)} className='post-comment-popup'>show comment ↓</div>
      <div className={`comments-popup ${show ? '' : 'hide'}`}>
        <h3 style={{textAlign: 'center'}}>Comments <button onClick={()=>setShow(false)}>X</button></h3>
        <hr/>
        <ul>
          {
            post?.comments && post.comments.length > 0 ? post.comments.map(comment => {
              return <li key={comment.id}>
                <div><span>{ comment.email }</span></div>
                <div>message: <span>{ comment.body }</span></div>
              </li>
            }) : <li>Not Found</li>
          }
        </ul>
      </div>
    </div>
  )
}
