import Header from "./Components/Header";
import Particles from "./Components/Particles";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Styles/App.css";
import { Icon } from "@iconify/react";
import { Component } from "react";

export default class App extends Component<{}, { content: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      content: " years ",
    };
  }
  calcYears = () => new Date().getFullYear() - 2020;
  render() {
    return (
      <div>
        <Particles />
        <Header />
        <p
          className="App"
          onMouseEnter={() =>
            this.setState({
              content: ` ${this.calcYears().toString()}+ years `,
            })
          }
          onMouseLeave={() =>
            this.setState({
              content: " years ",
            })
          }
        >
          I'm a Software Engineer, Security Analyst, and IT consultant with
          <span className="experience">{this.state.content}</span>
          of hands-on experience developing, maintaining, and deploying
          solutions using a range of strategies, programming languages, and tech
          stacks. I've led teams of 3-5 people across Frontend, API,
          Graphic/Design, and Backend departments. In addition, I've Deployed
          Solutions for establishments both locally and internationally.
        </p>
        <hr className="sep" />
        <div>
          <div className="hide-button">
            <h1 className="projects-header">Projects</h1>
            <Icon
              onClick={() => (window.location.href = "#contact")}
              className="hide-icon"
              icon="bi:arrow-down-circle-fill"
            />
          </div>
        </div>
        <Projects />
        <hr className="sep" />
        <h1 className="projects-header" id="contact">
          Contact Me
        </h1>
        <Contact />
        <hr className="sep" />
        <Footer />
      </div>
    );
  }
}
