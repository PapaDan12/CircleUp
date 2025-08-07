import React from 'react';

const posts = [
  {
    title: 'Top 5 AR Creation Tools on CircleUp',
    date: 'August 3, 2025',
    summary: 'Discover the best features our AR suite has to offer.',
  },
  {
    title: 'Why Community-Driven AR Is the Future',
    date: 'July 25, 2025',
    summary: 'Explore how shared AR spaces are changing digital life.',
  },
];

const Blog = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.summary}</p>
            <button className="mt-2 text-blue-600 hover:underline">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
