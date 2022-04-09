import React from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<svg
					className="hex"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="100%"
					height="100%"
				>
					<defs>
						<pattern
							id="hexagons"
							width="50"
							height="43.4"
							patternUnits="userSpaceOnUse"
							patternTransform="scale(5) translate(2) rotate(45)"
						>
							<polygon
								points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
								id="hex"
							/>
							<use xlinkHref="#hex" x="25" />
							<use xlinkHref="#hex" x="-25" />
							<use xlinkHref="#hex" x="12.5" y="-21.7" />
							<use xlinkHref="#hex" x="-12.5" y="-21.7" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#hexagons)" />
				</svg>
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
					<div className="hex1"></div>
				</h1>
			</header>
		);
	}
}
