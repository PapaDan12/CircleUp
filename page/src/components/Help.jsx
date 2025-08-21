import React from 'react';
import { useState, useEffect } from 'react';

const HelpCenter = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []); // Runs once on mount

    console.log(users)

  if (loading) return <p>Loading...</p>;
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <input
        className="w-full p-2 border rounded mb-6"
        placeholder="Search for help..."
      />

      

      <div className="space-y-4">
        <Faq question="How do I create a Circle?" answer="Click on 'Start Circle' from your dashboard, set a topic, and invite users." />
        <Faq question="Is AR available offline?" answer="No, you'll need an internet connection for AR collaboration." />
        <Faq question="How do I report an issue?" answer="Use the contact support button or email help@circleup.app." />
      </div>

       <ul>
      {users.map((user) => (
        <div className='flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow mb-4' key={user.id}>
        <li key={user.id}>{user.name}</li>
        <li key={user.id}>{user.email}</li>
        </div>
  
      ))}
    </ul>
    </div>

    
  );
};

const Faq = ({ question, answer }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="font-medium">{question}</h3>
    <p className="text-sm text-gray-600">{answer}</p>
  </div>
);




export default HelpCenter;
