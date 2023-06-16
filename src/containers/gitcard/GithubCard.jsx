import React, { useEffect, useState } from "react";
import "./GithubCard.css";
import axios from "axios";

const GithubCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Sasmeee"
        );
        const gitName = response.data.name;
        const gitTeam = response.data.company;
        const giLocation = response.data.location;
        const gitRepoCount = response.data.public_repos;
        const gitJoinedDate = response.data.created_at;
        const date = new Date(gitJoinedDate);
        const formattedDate = date.toDateString();
        const gitFollowCount = response.data.followers;
        const gitfollowingCount = response.data.following;
        setData({
          gitName,
          gitTeam,
          giLocation,
          gitRepoCount,
          formattedDate,
          gitFollowCount,
          gitfollowingCount,
        });
      } catch (error) {
        console.error("Error fetching data!", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="gi-container">
      <table className="gi-table">
        <tr>
          <th>Name</th>
          <td>{data && data.gitName}</td>
        </tr>
        <tr>
          <th>Team</th>
          <td>{data && data.gitTeam}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{data && data.giLocation}</td>
        </tr>
        <tr>
          <th>Repos</th>
          <td>{data && data.gitRepoCount}</td>
        </tr>
        <tr>
          <th>Joined</th>
          <td>{data && data.formattedDate}</td>
        </tr>
        <tr>
          <th>Followers</th>
          <td>{data && data.gitFollowCount}</td>
        </tr>
        <tr>
          <th>Following</th>
          <td>{data && data.gitfollowingCount}</td>
        </tr>
      </table>
    </div>
  );
};

export default GithubCard;
