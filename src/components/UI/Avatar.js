import React from "react";
import classes from "./Avatar.module.css";

function Avatar({ src, className }) {
	return (
		<img
			src={src}
			className={`${classes.avatar} ${className}`}
			alt=''
		/>
	);
}

export default Avatar;
