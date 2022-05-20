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
            <Icon key={element} className="project-icons" icon={element} />
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
            <img alt={this.props.title + ` image`} src={this.props.image} />
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
          description="MLand is a community platform that discusses cyber security, Linux, art, psychology, and lots more.
		   I was commissioned to work along and guide their development team to deploy a scalable MEVN stack application to
			 handle community news, giveaways, forums, and fun minigames as well as seamlessly integrating their discord platform."
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
		  Muneshwers Travel Service Limited is Guyana's number one choice for travel arrangements.
		   Work there included ICT support and management along with multiple backend deployments.
		   Relating considerable developments, I've developed a Django and selenium-based ticketing
		   API that validates flight data.
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
		  Ikigai is a  popular anime-centric community. 
		  My role in the development process consists of engineering a NodeJS backend for the community
		   and bringing the lead designer's idea to life utilizing a ReactJS and React-Native frontend.
                    "
        />
        <Project
          title="Crypter"
          image={Crypter}
          description="Crypter is an open-source encrypted messenger geared toward user privacy, security, and anonymity. My role in the development consists of leading the development post and working on the backend, frontend, database, server, and quality assurance departments respectfully."
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
          description="My dotfiles consist of my window manager, terminal, shell, and other utilities. The source code is publically available and liberated under the GPL v3 license. My dotfiles practice human-readability executing configurations should be trivial."
          redirect="https://github.com/ddenobrega/portfolio"
        />
      </div>
    );
  }
}
