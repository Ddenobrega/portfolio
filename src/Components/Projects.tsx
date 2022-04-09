import { Component } from "react";
import "../Styles/Projects.css";
import { Icon } from "@iconify/react";

import MLand from "../Assets/Projects/mland.jpg";
import Muneshwers from "../Assets/Projects/muneshwers.png";
import Ikigai from "../Assets/Projects/ikigai.jpg";
import Crypter from "../Assets/Projects/crypter.jpg";
import Dotfiles from "../Assets/Projects/dotfiles.png";

interface IProjectProps {
	image: string;
	title: string;
	description: string;
	redirect?: string;
	icons?: Array<string>;
}

interface IProjectState {
	redirect: string;
}

class Icons extends Component<{ icons?: Array<string> }> {
	render() {
		return (
			<div>
				<p className="project-icons-header">Technologies used: </p>
				<div className="project-icons-container">
					{this.props.icons?.map((element) => (
						<Icon
							key={element}
							className="project-icons"
							icon={element}
						/>
					))}
				</div>
			</div>
		);
	}
}

class Project extends Component<IProjectProps, IProjectState> {
	constructor(props: IProjectProps) {
		super(props);
		this.state = {
			redirect: this.initalRedirect(),
		};
	}

	initalRedirect = () => {
		return this.props.redirect === undefined ? "" : this.props.redirect;
	};
	redirect = (redirect: string) => {
		window.open(redirect);
	};

	render() {
		return (
			<div className="project-container" key={this.props.title}>
				<div className="project-row-1">
					<div className="project-image-container">
						<img
							alt={this.props.title + ` image`}
							src={this.props.image}
						/>
					</div>
					<h2>{this.props.title}</h2>
				</div>
				<div>
					<Icons icons={this.props.icons} />
				</div>
				<p className="project-para-heading">Description: </p>
				<p className="project-para">{this.props.description}</p>
				<div
					onClick={() => this.redirect(this.props.redirect!)}
					className="redirect-button"
				>
					More
				</div>
			</div>
		);
	}
}

export default class Projects extends Component {
	render() {
		return (
			<div className="projects-container" id="project-container">
				<Project
					title="MLand"
					image={MLand}
					description="MLand is 
                    a community platform that discusses
                    cybersec topics, psychology and lots 
                    more. I was commissioned to work along 
                    and guide their development team to deploy 
                    a scalable MEVN stack application to handle
                    community news, giveaways, forums and fun 
                    minigames as well as seamless integrations 
                    with their discord platform."
					icons={[
						"logos:vue",
						"simple-icons:express",
						"logos:nodejs-icon",
						"logos:javascript",
						"vscode-icons:file-type-mongo",
					]}
				/>
				<Project
					title="MTSL"
					image={Muneshwers}
					description="
                    Muneshwers Travel Service Limited is Guyana's 
                    number one choice for travel arrangements, 
                    My work there includes ICT support and management 
                    and multiple backend deployments. With regards to 
                    major developements I've developed a django and 
                    selenium based ticketing API that validates flight 
                    data.
                    "
					icons={[
						"vscode-icons:file-type-django",
						"vscode-icons:file-type-excel",
						"logos:selenium",
						"logos:python",
					]}
				/>
				<Project
					title="Ikigai"
					image={Ikigai}
					icons={[
						"tabler:brand-react-native",
						"vscode-icons:file-type-reactts",
						"logos:mysql-icon",
						"simple-icons:express",
						"logos:typescript-icon",
						"logos:nodejs-icon",
					]}
					description="
                    Ikigai is a somewhat popular anime centric community. My role in the development process consists of engineering a nodejs backend for the community aswell as bringing the lead designers idea to life in a reactjs and reactnative frontend
                    "
				/>
				<Project
					title="Crypter"
					image={Crypter}
					description="Crypter is an opensource encrypted messenger aimed at bring users privacy and security. My role in the development consits as leading the development post and working on the backend aswell [typescript, nodejs, http] as the frontend [react,react-native], database, server and testwriting departments respectfully"
					icons={[
						"tabler:brand-react-native",
						"vscode-icons:file-type-reactts",
						"logos:mysql-icon",
						"simple-icons:express",
						"logos:typescript-icon",
						"logos:nodejs-icon",
					]}
				/>
				<Project
					title="Dotfiles"
					icons={[
						"logos:bash-icon",
						"logos:c",
						"logos:lua",
						"vscode-icons:file-type-makefile",
						"logos:python",
						"bi:filetype-sh",
						"vscode-icons:file-type-config",
					]}
					image={Dotfiles}
					description="My dotfiles consist of my window manager, terminal, shell and other utils. their configuration all are publically avaliable and free for use and modification without credit. most of my dotfiles consist of shellcode or modular c99 std clanguages so modifying them should be of ease."
					redirect="https://github.com/ddenobrega/portfolio"
				/>
			</div>
		);
	}
}
