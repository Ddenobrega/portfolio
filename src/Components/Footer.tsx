import { Component } from "react";
import "../Styles/Footer.css";
import { Icon } from "@iconify/react";
// @ts-ignore
import CV from "../Assets/Documents/CV.pdf";
import HexBg from "./HexBg";

class Socials extends Component {
  render() {
    return (
      <div>
        <h3>Socials</h3>
        <div>
          <Icon className="icon" icon="bi:github" />
          <a href="https://github.com/ddenobrega">Github</a>
        </div>
        <div>
          <Icon className="icon" icon="bi:linkedin" />
          <a href="https://linkedin.com/in/dcdenobrega">Linkedin</a>
        </div>
        <div>
          <Icon className="icon" icon="simple-icons:hackthebox" />
          <a href="https://app.hackthebox.com/profile/975406">Hack the box</a>
        </div>
        <div>
          <Icon className="icon" icon="akar-icons:facebook-fill" />
          <a href="https://www.facebook.com/DarylDeNobrega/">Facebook</a>
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
        {/* <svg
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
        </svg> */}
        <HexBg />
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
