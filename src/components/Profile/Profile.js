import React from "react";
import "./profile.scss";

function Profile() {
  return (
    <section className="profile-container">
      <div className="profile">
        <div className="profile-picture">
          <div className="picture" />
        </div>
        <div className="profile-description">
          <h3>Hi, I'm Sebastian Lares</h3>
          <p>
            Front End Developer from Buenos Aires, Argentina, and making new
            projects and websites is my passion. I specialize in JavaScript and
            React.js, but I'm always learning new technologies and ways to make
            simpler and cleaner applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
