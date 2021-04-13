import React from "react";
import "./profile.scss";

function Profile() {
  return (
    <section className="profile-container">
      <div className="profile">
        <div className="welcome">
          <h3>
            Hello there! <br></br>My name is Sebastian Lares
          </h3>
        </div>
        <p>
          I'm a Front End Developer from Buenos Aires, Argentina, specialized in
          JavaScript and React.js, always learning new technologies and ways to
          make simpler and cleaner applications.
          <br />
          Take a look around and check out my work!
        </p>
      </div>
    </section>
  );
}

export default Profile;
