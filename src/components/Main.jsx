import React, { useState } from "react";

export default function Main() {
  const [postsTitle, setPostsTitle] = useState(["Post 1", "Post 2", "Post 3"]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="container mt-5">
        <ul className="list-group mb-4">
          {postsTitle.map((title, i) => (
            <li key={i} className="list-group-item">
              {title}
            </li>
          ))}
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={""} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  );
}
