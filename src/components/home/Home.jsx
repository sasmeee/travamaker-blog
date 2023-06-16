import React from "react";
import PostData from "../data/DataHome.json";
import './Home.css'

const Home = () => {
  return (
    <div className="h-container">
      {PostData.map((post) => {
        return (
          <div className="h-cont" key={post.post_id}>
            <h2>{post.post_title}</h2>
            <p>{post.post_desc}</p>
            <a href={post.post_link}>Read More</a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
