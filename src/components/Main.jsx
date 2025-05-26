import React, { useState } from "react";

import trashIcon from "../assets/img/trash.svg";

export default function Main() {
  const [postsTitle, setPostsTitle] = useState(["Post 1", "Post 2", "Post 3"]);

  const [inputValue, setInputValue] = useState("");

  const handleDeletePost = (iToRemove) => {
    setPostsTitle(postsTitle.filter((postTitle, i) => i !== iToRemove));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPostsTitle([...postsTitle, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <main>
      <div className="container mt-5">
        <ul className="list-group mb-4">
          {postsTitle.map((title, i) => (
            <li
              key={i}
              className="list-group-item d-flex align-items-center justify-content-between">
              {title}{" "}
              <div className="trash-container">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeletePost(i)}>
                  <img src={trashIcon} alt="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleFormSubmit} className="d-flex gap-4">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  );
}
