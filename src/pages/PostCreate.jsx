import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreate = () => {

  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      created_at: new Date().toLocaleDateString(),
    };

    fetch(' http://localhost:3000/post', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => {
       // use navigate
       navigate('/');
    });
  };

  return (
    <>    
    <h1 className=' font-bold text-2xl mb-6'>Add New List</h1>
     <form onSubmit={handleSubmit}>
        <div className=' mb-4'>
          <label className=' flex'>Title</label>
            <input type="text"
              className=' grow input input-bordered input-accent w-full max-w-xs' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
     
        </div>

        <div className=' mb-8'>
            <label>Content</label>
            <textarea 
               className=' textarea textarea-accent rounded-lg w-full block mt-1
               focus:ring-2' 
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
        </div>

        <button className=' btn btn-accent text-white block w-full rounded-lg hover:bg-secondary'>
            Create
        </button>
     </form>

    </>
  )
}

export default PostCreate