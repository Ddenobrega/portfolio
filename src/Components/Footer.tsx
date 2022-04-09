import { Component } from "react";
import "../Styles/Footer.css";
import { Icon } from "@iconify/react";
// @ts-ignore
import CV from "../Assets/Documents/CV.pdf";

class Socials extends Component {
	render() {
		return (
			<div>
				<h3>Socials</h3>
				<div>
					<Icon className="icon" icon="bi:github" />
					<a href="https://github.com/ddenobreaga">Github</a>
				</div>
				<div>
					<Icon className="icon" icon="bi:linkedin" />
					<a href="https://linkedin.com/in/dcdenobrega">Linkedin</a>
				</div>
				<div>
					<Icon className="icon" icon="simple-icons:hackthebox" />
					<a href="https://app.hackthebox.com/profile/975406">
						Hack the box
					</a>
				</div>
				<div>
					<Icon className="icon" icon="akar-icons:facebook-fill" />
					<a href="https://www.facebook.com/DarylDeNobrega/">
						Facebook
					</a>
				</div>
				<div>
					<Icon className="icon" icon="akar-icons:twitter-fill" />
					<a href="https://twitter.com/DcDenobrega">Twitter</a>
				</div>
			</div>
		);
	}
}

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<Socials />
				<div>
					<h3>More Information</h3>
					<div>
						<Icon icon="carbon:document" className="icon" />
						<a href={CV} target="_blank" rel="noreferrer">
							Resume
						</a>
					</div>
					<div>
						<Icon icon="bi:code-slash" className="icon" />
						<a
							href="https://github.com/ddenobrega/portfolio"
							target="_blank"
							rel="noreferrer"
						>
							Source Code
						</a>
					</div>
				</div>
			</footer>
		);
	}
}
