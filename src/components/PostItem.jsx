import React, { useState } from 'react'

const PostItem = ({post, handleDelete, handleEdit}) => {

  const [isEditing, setIsEditing] = useState(null); // Track editing post

  const handleSave = (id) => {
    const updatedTitle = document.getElementById(`title-${id}`).innerText;
    const updatedBody = document.getElementById(`body-${id}`).innerText;

    handleEdit(id, updatedTitle, updatedBody);
    setIsEditing(null);
  };

  return (
    <>    
      {post.map((post) => (
        <div key={post.id} className="p-6 border-b">
          <div className="mb-4 flex justify-between items-start">
            <div>
              <h2
                id={`title-${post.id}`}
                className="font-bold text-lg text-secondary"
                contentEditable={isEditing === post.id}
                suppressContentEditableWarning={true}
              >
                {post.title}
              </h2>
              <small className="text-gray-500 text-xs">{post.created_at}</small>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="h-6 w-6 btn btn-circle btn-outline hover:bg-red-700 hover:text-white"
            >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p
            id={`body-${post.id}`}
            className="text-gray-700"
            contentEditable={isEditing === post.id}
            suppressContentEditableWarning={true}
          >
            {post.body}
          </p>

          {isEditing === post.id ? (
            <button
              onClick={() => handleSave(post.id)}
              className="mt-2 h-6 w-16 btn btn-outline btn-success hover:text-white"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(post.id)}
              className="mt-2 h-6 w-12 btn btn-outline btn-accent hover:text-white"
            >
              Edit
            </button>
          )}
        </div>
      ))}
    </>
  );
};


export default PostItem