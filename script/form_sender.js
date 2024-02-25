document.getElementById("submit-btn").addEventListener("click", async (e) => {
	e.preventDefault();
	let name = document.getElementById("text-name").value;
	let surname = document.getElementById("text-surname").value;
	let number_of_other_persons = document.getElementById(
		"number-of-other-persons"
	).value;
	console.log(name, surname, number_of_other_persons);

	const url =
		"https://script.google.com/macros/s/AKfycby1NAuijVsLEOAcxr3bnRv3jbzUT0sskIasrGOG_kzzbe5UtG7aGF1hjNnpGTT-F0Oe/exec?" +
		new URLSearchParams({
			name: name,
			surname: surname,
			number_of_other_persons: number_of_other_persons,
		});
	await fetch(url)
		.then((response) => response.text())
		.then((text) => {
			console.log(text);
            if (text.toUpperCase() == 'OK'){
                document.cookie = "claimSent=true"
            }
		});
});
