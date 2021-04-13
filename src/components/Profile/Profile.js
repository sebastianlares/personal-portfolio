import React from "react";
import "./profile.scss";

function Profile() {
  return (
    <section className="profile-container">
      <div className="profile">
        <div className="welcome">
          <h3>
            Hello there! <br></br>my name is Sebastian Lares
          </h3>
        </div>
        <p>
          I'm a Front End Developer from Buenos Aires, Argentina, and making new
          projects and websites is my passion.<br></br> I specialize in
          JavaScript and React.js, but I'm always learning new technologies and
          ways to make simpler and cleaner applications. Check out my work!
        </p>
      </div>
    </section>
  );
}

export default Profile;
