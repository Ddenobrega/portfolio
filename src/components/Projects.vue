<template>
	<div class="pmain">
		<item
			title="MLand"
			description="MLand is a community platform that discusses cybersec topics, psychology and lots more. I was commissioned to work along and guide their development team to deploy a scalable MEVN stack application to handle community news, giveaways, forums and fun minigames as well as seamless integrations with their discord platform."
			:src="this.clancyy"
			alt="mland"
			btn="https://github.com/Ddenobrega/mland-backend-portfolio"
		/>
		<item
			title="MTSL"
			:src="this.mtsl"
			description="Muneshwers Travel Service Limited is Guyana's number one choice for travel arrangements, My work there includes ICT support and management and multiple backend deployments. With regards to major developements I've developed a django and selenium based ticketing API that validates flight data."
			alt="Muneshwers Travel Service Logo"
			btn="https://muneshwerstravel.com/flight.html"
		/>
		<item
			title="DotFiles"
			:src="this.dot"
			description="My dotfiles consist of my window manager, terminal, shell and other utils. their configuration all are publically avaliable and free for use and modification without credit. most of my dotfiles consist of shellcode or modular c99 std clanguages so modifying them should be of ease."
			btn="https://github.com/Ddenobrega/dotfiles"
			alt="dotfiles"
		/>
		<item
			title="Ikigai Community"
			description="(In Development) Ikigai is a somewhat popular anime centric community. My role in the development process consists of engineering a nodejs backend for the community aswell as bringing the lead designers idea to life in a reactjs and reactnative frontend"
			btn="."
			:src="this.ikigai"
			alt="ikigai"
		/>
		<item
			title="Crypt3r"
			description="(In Development) Crypter is an opensource encrypted messenger aimed at bring users privacy and security. My role in the development consits as leading the development post and working on the backend aswell [typescript, nodejs, http] as the frontend [react,react-native], database, server and testwriting departments respectfully"
			btn="."
			:src="this.crypt3r"
		/>
	</div>
</template>

<script>
	import clancyy from "../assets/grid/clancyy.jpg";
	import mtsl from "../assets/grid/logo.png";
	import dot from "../assets/grid/desktoppng.png";
	import ikigai from "../assets/grid/ikigai.jpg";
	import item from "./item.vue";
	import crypt3r from "../assets/grid/crypter.jpg";
	export default {
		components: {
			item,
		},
		data() {
			return {
				clancyy,
				mtsl,
				dot,
				ikigai,
				crypt3r,
			};
		},
	};
</script>

<style scoped>
	.pmain {
		display: flex;
		flex: 1;
		gap: 3rem;
		justify-content: center;
		padding: calc(100% / 16);
		flex-wrap: wrap;
	}
</style>
