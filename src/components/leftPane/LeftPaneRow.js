import React from "react";
import classes from "./LeftPaneRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../UI/Avatar";

function LeftPaneRow({ title, icon, src }) {
	return (
		<div className={classes["leftPane-row"]}>
			{src && <Avatar src={src} />}
			{icon && (
				<FontAwesomeIcon icon={icon} className={classes.icon} />
			)}
			<h4>{title}</h4>
		</div>
	);
}

export default LeftPaneRow;
