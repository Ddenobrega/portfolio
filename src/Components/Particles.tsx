import { Component } from "react";
import Particles from "react-tsparticles";

export default class ParticleComponent extends Component {
	render() {
		return (
			<Particles
				id="tsparticles"
				options={{
					fullScreen: {
						enable: true,
						zIndex: 1,
					},
					background: {
						color: {
							value: "",
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							repulse: {
								distance: 100,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#dd4545",
						},
						links: {
							color: "#dd4545",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 0.5,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
				}}
			/>
		);
	}
}
