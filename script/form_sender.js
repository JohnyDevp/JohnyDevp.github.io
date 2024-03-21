var previousCannot;
var previousEvening;

// event when change radio button of diet
let whatDietTxt = document.querySelector("#what-diet");
document.body.addEventListener("change", function (e) {
	let target = e.target;
	switch (target.id) {
		case "diet-no":
			whatDietTxt.style.display = "none";
			whatDietTxt.value = "";
			whatDietTxt.disabled = true;
			break;
		case "diet-yes":
			whatDietTxt.style.display = "grid";
			whatDietTxt.disabled = false;
			break;
	}
});

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
		whatDietTxt.style.display = "none";
		whatDietTxt.value = "";
		whatDietTxt.disabled = true;
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
	let attendance = document.querySelector('input[id="lunch"]:checked')
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
	if (attendance == "nepřijdu") {
		portion = "-";
		diet = "-";
	}
	if (attendance == "večer") {
		portion = "-";
	}

	if (!(name && surname && attendance && portion && diet)) {
		alert("Prosím vyplňte všechna pole!");
	} else {
		const url =
			"https://script.google.com/macros/s/AKfycbxzNOmJYasbwUoHE8M2k8FM2-JPlr30JkT2G9Ogj0nXgMcOnYdzdXo4jWi1eOPcXbEe/exec?" +
			new URLSearchParams({
				name: name,
				surname: surname,
				attendance: attendance,
				portion: portion,
				diet: diet,
				note: note,
				whatdiet: whatDietTxt.value,
			});
		console.log(url);

		// reset to default
		document.getElementById("text-name").value = "";
		document.getElementById("text-surname").value = "";
		document.querySelector('input[id="lunch"]').checked = "true";
		document.querySelector('input[id="full"]').checked = "true";
		document.querySelector('input[id="diet-no"]').checked = "true";
		document.getElementById("note-txt").value = "";
		whatDietTxt.value = "";

		// wait for the response to display notification
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
