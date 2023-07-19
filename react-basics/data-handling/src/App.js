import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './components/Post';
import { useFetchData } from './hooks/useFetchData';

function App() {

  const { loading, fetch } = useFetchData();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [])

  function fetchPosts() {
    fetch({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then((res) => setPosts(res)).catch((err) => setError(err));
  }

  function updateTitleHandler({ postId: id, title }) {

    if (!title) return alert("title not specified");

    fetch({
      url: 'https://jsonplaceholder.typicode.com/posts/' + id,
      method: 'patch',
      data: JSON.stringify({ title: title })
    }).then((res) => {
      setPosts(posts => posts.map(post => post.id === id ? { ...post, title } : post));
    }).catch((err) => setError(err));
  }

  function deletePostHandler(id) {

    if (!id) return alert("id not specified");

    fetch({
      url: 'https://jsonplaceholder.typicode.com/posts/'+id,
      method: 'delete'
    }).then((res) =>{
      setPosts(posts => posts.filter(post => post.id !== id));
    }).catch((err) => setError(err));
  }

  function getCommentsHandler(id){
    if (!id) return alert("id not specified");

    return fetch({
      url: 'https://jsonplaceholder.typicode.com/posts/'+id+'/comments',
      method: 'get'
    }).then((res) =>{
      setPosts(posts => posts.map(post => post.id === id ? { ...post, comments: res ?? [] } : post));
    }).catch((err) => setError(err));
  }

  return (
    <>
      {loading && <div>loading...</div>}
      {
        !error ? <div className="posts">
          {
            posts && posts.length > 0 && posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  updateTitle={updateTitleHandler}
                  deletePost={deletePostHandler}
                  getComments={getCommentsHandler}
                />
              )
            })
          }
        </div> : <div className='error'> <h2>{error?.message}</h2> </div>
      }
    </>
  );
}

export default App;
