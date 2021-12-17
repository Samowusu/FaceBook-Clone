import React from "react";
import classes from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faHome,
	faFlag,
	faStore,
	faUserCircle,
	faVideo,
	faUsers,
	faPlus,
	faComments,
	faBell,
	faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<div className={classes.header}>
			<div className={classes["header-left"]}>
				<img
					alt='fblogo'
					src='https://worldsummit.ai/wp-content/uploads/sites/4/2021/07/Facebook-logo.png'
				/>
				<div className={classes["header-input"]}>
					<FontAwesomeIcon
						icon={faSearch}
						className={classes.icon}
					/>
					<input type='text' />
				</div>
			</div>

			<div className={classes["header-center"]}>
				<div className={classes["header-options"]}>
					<FontAwesomeIcon
						icon={faHome}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faFlag}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faVideo}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faStore}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faUsers}
						className={classes.icon}
					/>
				</div>
			</div>

			<div className={classes["header-right"]}>
				<div className={classes["header-info"]}>
					<FontAwesomeIcon
						icon={faUserCircle}
						className={classes.icon}
					/>
					<h4>Vandal NKB</h4>
				</div>
				<div className={classes["header-extras"]}>
					<FontAwesomeIcon
						icon={faPlus}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faComments}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faBell}
						className={classes.icon}
					/>
					<FontAwesomeIcon
						icon={faAngleDown}
						className={classes.icon}
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
