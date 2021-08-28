import React from "react";
import "./profile.scss";

function Profile() {
	return (
		<section className="profile-container">
			<div className="profile">
				<div className="welcome">
					<h3>
						Hi there! <br></br>My name is Sebastian Lares
					</h3>
				</div>
				<p>
					I'm a Front End Developer from Buenos Aires, Argentina, who
					loves to bring projects to life in Javascript and React.js.{" "}
					<br />
					Writing cleaner and simpler code is what I'm most passionate
					about, and the goal I try to achieve everyday.
				</p>
			</div>
		</section>
	);
}

export default Profile;
