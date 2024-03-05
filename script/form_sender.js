document.getElementById("submit-btn").addEventListener("click", async (e) => {
	e.preventDefault();

	let name = document.getElementById("text-name").value;
	let surname = document.getElementById("text-surname").value;
	let attendation = document.querySelector('input[id="lunch"]:checked')
		? "oběd"
		: document.querySelector('input[id="evening"]:checked')
		? "večer"
		: "nepřijdu";
	let portion = document.querySelector('input[id="full"]:checked')
		? "plná"
		: "poloviční";
	let diet = document.querySelector('input[id="diet-yes"]:checked')
		? "ano"
		: "ne";
	let drink = document.getElementById("drink-preferences-txt").value;
	console.log(diet, portion, attendation, drink);

	if (!(name && surname && attendation && portion && diet)) {
		alert("Prosím vyplňte všechna pole!");
	}

	const url =
		"https://script.google.com/macros/s/AKfycbxcV7K3RcFqMiy5MiwSRgSoSfpcKeW1F9tPhTBEmH7nUwkQkPBGNMBHXW52McJi8SKd/exec?" +
		new URLSearchParams({
			name: name,
			surname: surname,
			attendation: attendation,
			portion: portion,
			diet: diet,
			drink: drink,
		});
	await fetch(url)
		.then((response) => response.text())
		.then((text) => {
			console.log(text);
			if (text.toLowerCase() == "ok") {
				document.getElementsByClassName("claim-sent-ok")[0].style.transform = "translateY(0)";
				setTimeout(() => {
					document.getElementsByClassName("claim-sent-ok")[0].style.transform = "translateY(-50vh)";
				}, 2000);
				document.cookie = "claimSent=true;SameSite=None";
			}
		});
});
