import React from "react";
import classes from "./Story.module.css";
import Avatar from "../UI/Avatar";

function Story({ backgroundImage, profileImage, title }) {
	return (
		<div
			className={classes.story}
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<Avatar src={profileImage} className={classes.avatar} />
			<h4>{title}</h4>
		</div>
	);
}

export default Story;
