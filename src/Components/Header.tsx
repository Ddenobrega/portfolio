import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import "../Styles/Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>
					<Typewriter
						options={{
							strings: [
								"Daryl DeNobrega",
								"Software Engineer",
								"Security Researcher",
								"Devops Engineer",
							],
							autoStart: true,
							loop: true,
						}}
					></Typewriter>
				</h1>
			</header>
		);
	}
}
