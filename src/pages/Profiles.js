import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profiles.css";

const Profiles = () => {
  const navigate = useNavigate();
  const profiles = ["User 1", "User 2", "User 3", "User 4"];

  return (
    <div className="profiles">
      <h1>Who's watching?</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile"
            onClick={() => navigate("/home")}
          >
            <img
              src={`/images/Netflix-avatar${index}.jpg`}
              alt="Profile"
            />
            <h2>{profile}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
