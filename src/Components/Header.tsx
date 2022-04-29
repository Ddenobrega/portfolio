import React from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Header.css";
import HexBg from "./HexBg";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <HexBg />
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
