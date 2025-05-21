import React, { useEffect, useState } from "react";

const Categories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <p className="text-sm text-teal-600 font-semibold">KATEGORI</p>
      <h2 className="text-2xl font-bold mt-1">Mau belajar apa hari ini?</h2>
      <p className="text-gray-600 mt-1 mb-6">
        Temukan tutorial berdasarkan minatmu.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
          >
            
            <h3 className="font-semibold text-base mb-2 capitalize">
              {post.title.length > 50
                ? post.title.slice(0, 50) + "..."
                : post.title}
            </h3>
            <p className="text-sm text-gray-600">
              {post.body.length > 100
                ? post.body.slice(0, 100) + "..."
                : post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
