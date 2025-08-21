import { useState, useEffect } from 'react';



function UserList() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts ]= useState([]);
  const [comments, setComments ]= useState([]);

 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(1, 4));
       
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []); // Runs once on mount


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(1,2));
        setLoading(false);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []); // Runs once on mount


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data.slice(1, 10));
      
        setLoading(false);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []); // Runs once on mount

   

  if (loading) return <p>Loading...</p>;
  return (
    <div className="p-8 max-w-5xl mt-2 bg-lime-300 rounded-lg mx-auto">
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <ul>
      {posts.map((post) => (
        <li  key={post.id} >{post.title}</li>
      ))}
    </ul>
    <ul 
    className='bg-amber-200'>
      {comments.map((comment) => (
        <li  key={comment.id} >{comment.name}</li>
      ))}
    </ul>
    
    </div>
  );
}


export default UserList