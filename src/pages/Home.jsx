import PostItem from '../components/PostItem';
import { useState, useEffect } from 'react';

const Home = () => {
   
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/post')
         .then((res) => res.json())
         .then((data) => {
            data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
            setPost(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message)
            setLoading(false);
        });
  }, []);

  const handleDelete = (id) => {
    setPost(post.filter((post) => post.id !== id));

    fetch('http://localhost:3000/post/' + id, {
      method: "DELETE",
    });
  };

  const handleEdit = (id, updatedTitle, updatedBody) => {
    setPost(
      post.map((p) =>
        p.id === id ? { ...p, title: updatedTitle, body: updatedBody } : p
      )
    );

    fetch(`http://localhost:3000/post/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
    });
  };


  return (
    <>
    { loading && <span className="loading loading-spinner text-accent"></span> }
    { error && <h1>{error}</h1> }
   <PostItem  post={post} handleDelete={handleDelete} handleEdit={handleEdit}/>
   </>
  )
}

export default Home