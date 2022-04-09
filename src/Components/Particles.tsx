import { Component } from "react";
import Particles from "react-tsparticles";
import Poptions from "../Assets/Particles/parallax.json";

export default class ParticleComponent extends Component {
	render() {
		return (
			<Particles
				id="tsparticles"
				// @ts-ignore
				options={Poptions}
			/>
		);
	}
}
