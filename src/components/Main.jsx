import React, { useState } from "react";

export default function Main() {
  const [postsTitle, setPostsTitle] = useState(["Post 1", "Post 2", "Post 3"]);
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
      </div>
    </main>
  );
}
