// remaining time count animation
let counter = document.getElementById("timer");
setInterval(() => {
	let diff = (new Date(2024, 7, 13, 1, 0, 0) - Date.now()) / 1000;
	let days = Math.floor(diff / (60 * 60 * 24));
	let hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
	let minutes = Math.floor((diff % (60 * 60)) / 60);
	let seconds = Math.floor(diff % 60);
	counter.innerHTML = `${days} ${
		days > 4 || days == 0 ? "dnů" : days > 1 ? "dny" : "den"
	} <br> ${hours} ${
		hours > 4 || hours == 0 ? "hodin" : hours > 1 ? "hodiny" : "hodina"
	} <br> ${minutes} ${
		minutes > 4 || minutes == 0
			? "minut"
			: minutes > 1
			? "minuty"
			: "minuta"
	} <br> ${seconds} ${
		seconds > 4 || seconds == 0
			? "vteřin"
			: seconds > 1
			? "vteřiny"
			: "vteřina"
	}`;
}, 1000);

// show the popup with ask for registration if the form hasn't been
// filled on this computer yet
async function showRegistrationPopup() {
	// check for the cookie
	let setCookies = document.cookie;
	let splittedCookies = setCookies.split("=");
	console.log(splittedCookies);
	for (let a in splittedCookies) {
		if ("claimSent" == splittedCookies[a]) {
			// when the cookie has been found, then don't show the popup
			console.log("hey there");
			return;
		}
	}

	await setTimeout(() => {
		// show the popup by removal of the value none of the display property
		document.getElementsByClassName(
			"register-popup-container"
		)[0].style.display = "";
		document.getElementsByClassName("content-container")[0].style.display =
			"";
	}, 700);
}
showRegistrationPopup();

// hide the popup
function closeRegistrationPopup() {
	document.getElementsByClassName(
		"register-popup-container"
	)[0].style.display = "none";
	document.getElementsByClassName("content-container")[0].style.display =
		"none";
}

// toggle navbar menu animation
let isMenuOpen = false;
function toggleMenu() {
	let navbar = document.getElementById("navbar");
	let menu_container = document.getElementById("menu-button-container");
	let menu_icon = document.getElementById("menu-icon");
	switch (isMenuOpen) {
		case false:
			// open the navbar
			navbar.style.transform = "translateX(0%)";

			// move the menu icon too
			menu_container.style.width = "calc(50% + 60px)";

			isMenuOpen = true;
			break;
		case true:
			// hide the navbar
			navbar.style.transform = "translateX(-100%)";

			menu_container.style.width = "60px";

			isMenuOpen = false;
			break;
	}
}

// animation of selected navbar button
function navbarButtonSelected_handler(btn_id) {
	// just restart content of info, tips and accommodation bookmarks
	
	let current_btn = document.getElementById(btn_id);
	// get all buttons and remove the activie class from them
	let all_btns = document.getElementsByTagName("li");
	for (let i = 0; i < all_btns.length; i++) {
		all_btns[i].classList.remove("li-active");
	}

	// make active (marked) only the clicked button
	current_btn.classList.add("li-active");

	// hide the main window
	document.getElementsByClassName("mainpage-container")[0].style.display =
		"none";

	// open the div the belongs to clicked button
	document.getElementsByClassName("content-container")[0].style.display = ""; // this will remove the display: none; property from html code

	document
		.querySelectorAll("div.content-container>div")
		.forEach((content_bookmark) => {
			// close the menu (if on mobile device)

			if (window.innerWidth <= 1080 && isMenuOpen == true) {
				toggleMenu();
			}

			//  hide the bookmarks, that weren't selected and show the one which was
			if (
				content_bookmark.id ==
				String(btn_id).split("-")[0] + "-bookmark"
			) {
				content_bookmark.style.display = "";
			} else {
				content_bookmark.style.display = "none";
			}
		});
	document.getElementsByClassName("mainpage-body")[0].style.visibility =
		"hidden";
}

let currentActiveBtn = null;
function changeInfoContent_btnClick(btn_id) {
	let info_btn = document.getElementById("ib-info-btn");
	let contacts_btn = document.getElementById("ib-contacts-btn");
	let ib_info_content = document.getElementById("ib-info");
	let ib_contacts_content = document.getElementById("ib-contacts");
	let ib_intro_content = document.getElementById("ib-intro");
	console.log(currentActiveBtn);
	switch (btn_id) {
		case "info":
			if (currentActiveBtn == "info") break;

			info_btn.className += " btn-active ";
			ib_info_content.style.display = "";

			ib_intro_content.style.display = "none";
			ib_contacts_content.style.display = "none";
			contacts_btn.className = contacts_btn.className.replace(
				" btn-active ",
				""
			);
			console.log("ahoj");
			break;
		case "contacts":
			if (currentActiveBtn == "contacts") break;

			contacts_btn.className += " btn-active ";
			ib_contacts_content.style.display = "";

			ib_intro_content.style.display = "none";
			ib_info_content.style.display = "none";
			info_btn.className = info_btn.className.replace(" btn-active ", "");
			break;
		default:
			break;
	}
	currentActiveBtn = btn_id;
}
