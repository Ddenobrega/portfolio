import { Component, FormEvent } from "react";
import "../Styles/Contact.css";

export default class Contact extends Component {
	submitted() {
		console.log("test");
		let input = document.querySelector("input");
		let input2 = document.querySelector("textarea");
		let username: string = input!.value;
		let email: string = input2!.value;
		fetch(
			"https://discord.com/api/webhooks/890096990002753536/0GYhT1jf8M7vEsNnGNfRVCzL5zF4qtroiTke9_dpWKitkC3rA2o0nP_FeS69AzW-jkzl",
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					username: username,
					content: email,
				}),
			}
		).then(() => {
			input!.value = "";
			input2!.value = "";
		});
	}
	render() {
		return (
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.submitted();
					}}
					className="contact-form"
				>
					<input
						type="email"
						name="email"
						id="email-input"
						placeholder="Email"
						required
					/>
					<textarea placeholder="Message" cols={20}></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
