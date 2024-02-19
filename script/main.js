
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
    minutes > 4 || minutes == 0 ? "minut" : minutes > 1 ? "minuty" : "minuta"
  } <br> ${seconds} ${
    seconds > 4 || seconds == 0 ? "vteřin" : seconds > 1 ? "vteřiny" : "vteřina"
  }`;
}, 1000);

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
      menu_container.style.width = 'calc(50% + 60px)';

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
    let current_btn = document.getElementById(btn_id)
    let all_btns = document.getElementsByTagName('li')
    for (let i = 0; i<all_btns.length; i++)
    {
        all_btns[i].classList.remove('li-active')
    }

    current_btn.classList.add('li-active')
}
