import React from "react";
import classes from "./Post.module.css";
import Avatar from "../UI/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faComment,
	faShare,
} from "@fortawesome/free-solid-svg-icons";

function Post({
	profilePic,
	image,
	username,
	timestamp,
	message,
}) {
	return (
		<div className={classes.post}>
			{/* Upper Section of post */}
			<div className={classes.postTop}>
				<Avatar src={profilePic} className={classes.avatar} />
				<div className={classes.postTopInfo}>
					<h3>{username}</h3>
					<p>Timestamp...</p>
				</div>
			</div>

			{/* Bottom Section of post */}
			<div className={classes.postBottom}>
				<p>{message}</p>
			</div>

			{/* Image Section of post */}
			<div className={classes.postImage}>
				<img src={image} alt='' />
			</div>

			<div className={classes.postOptions}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faThumbsUp}
							className={classes.icon}
						/>
						<h4>Like</h4>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faComment}
							className={classes.icon}
						/>
						<h4>Comment</h4>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faShare}
							className={classes.icon}
						/>
						<h4>Share</h4>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Post;
