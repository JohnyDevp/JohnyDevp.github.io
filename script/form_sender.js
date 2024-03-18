var previousCannot;
var previousEvening;
function disableWhenCannot() {
	if (previousCannot) {
		//enable all the radio button
		document.querySelector('input[id="full"]').disabled = false;
		document.querySelector('input[id="half"]').disabled = false;
		document.querySelector('input[id="diet-no"]').disabled = false;
		document.querySelector('input[id="diet-yes"]').disabled = false;
		document.querySelector('input[id="full"]').checked = true;
		document.querySelector('input[id="diet-no"]').checked = true;
		previousCannot = false;
	}

	var devCannot = document.getElementById("cannot").checked;
	if (devCannot == true) {
		//disble all the radio button
		document.querySelector('input[id="full"]').disabled = true;
		document.querySelector('input[id="half"]').disabled = true;
		document.querySelector('input[id="diet-no"]').disabled = true;
		document.querySelector('input[id="diet-yes"]').disabled = true;
		document.querySelector('input[id="full"]').checked = false;
		document.querySelector('input[id="half"]').checked = false;
		document.querySelector('input[id="diet-no"]').checked = false;
		document.querySelector('input[id="diet-yes"]').checked = false;
		previousCannot = true;
	}

	if (previousEvening && !previousCannot) {
		//enable all the radio button
		document.querySelector('input[id="full"]').disabled = false;
		document.querySelector('input[id="half"]').disabled = false;
		// document.querySelector('input[id="diet-no"]').disabled = false;
		// document.querySelector('input[id="diet-yes"]').disabled = false;
		document.querySelector('input[id="full"]').checked = true;
		// document.querySelector('input[id="diet-no"]').checked = true;
		previousEvening = false;
	}

	var devEvening = document.getElementById("evening").checked;
	if (devEvening == true) {
		//disble all the radio button
		document.querySelector('input[id="full"]').disabled = true;
		document.querySelector('input[id="half"]').disabled = true;
		// document.querySelector('input[id="diet-no"]').disabled = true;
		// document.querySelector('input[id="diet-yes"]').disabled = true;
		document.querySelector('input[id="full"]').checked = false;
		document.querySelector('input[id="half"]').checked = false;
		// document.querySelector('input[id="diet-no"]').checked = false;
		// document.querySelector('input[id="diet-yes"]').checked = false;
		previousEvening = true;
	}
}

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
	let note = document.getElementById("note-txt").value;
	if (attendation == "nepřijdu") {
		portion = "-";
		diet = "-";
	}
	if (attendation == "večer") {
		portion = "-";
	}
	console.log(diet, portion, attendation, note);

	if (!(name && surname && attendation && portion && diet)) {
		alert("Prosím vyplňte všechna pole!");
	} else {
		const url =
			"https://script.google.com/macros/s/AKfycbxcV7K3RcFqMiy5MiwSRgSoSfpcKeW1F9tPhTBEmH7nUwkQkPBGNMBHXW52McJi8SKd/exec?" +
			new URLSearchParams({
				name: name,
				surname: surname,
				attendation: attendation,
				portion: portion,
				diet: diet,
				drink: note,
			});

		// reset to default
		document.getElementById("text-name").value = "";
		document.getElementById("text-surname").value = "";
		document.querySelector('input[id="lunch"]').checked = "true";
		document.querySelector('input[id="full"]').checked = "true";
		document.querySelector('input[id="diet-no"]').checked = "true";
		document.getElementById("note-txt").value = "";

		await fetch(url)
			.then((response) => response.text())
			.then((text) => {
				console.log(text);
				if (text.toLowerCase() == "ok") {
					document.getElementsByClassName(
						"claim-sent-ok"
					)[0].style.transform = "translateY(0)";
					setTimeout(() => {
						document.getElementsByClassName(
							"claim-sent-ok"
						)[0].style.transform = "translateY(-50vh)";
					}, 2000);
					document.cookie = "claimSent=true;SameSite=Strict";
					console.log(document.cookie);
				}
			});
	}
});
