// load questions into the html file
const questions_arr = [
	{
		question: "Kdo je starší?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo má více sourozenců?",
		answer: "neither",
		suplement: "Oba mají 4",
	},
	{
		question: "Kdo chodí spát a vstává v rozumný čas (když je volno)?",
		answer: "both",
		suplement: "Terezka 22:00-7:00, Ondra 0:30-9:00 😴",
	},
	{
		question: "Kdo je trpělivější?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo je rozumnější?",
		answer: "both",
		suplement: "",
	},
	{
		question: "Kdo je větší matla?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo chodí do školy věčně pozdě?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo odchází z hodin dříve?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo chodí na vlak na poslední chvíli?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo je větší puntičkář?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo má více nápadů?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "A kdo je realizuje?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo více čte?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo zpravidla nedočítá knihy do konce?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Který Ondra má více rád palačinky?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo lépe vaří?",
		answer: "terez",
		suplement:
			"(Pozn. Těstoviny se sýrem, šunkou a kečupem nejsou vaření 😘) ",
	},
	{
		question: "Kdo lépe peče?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo raději chodí na plavecký bazén?",
		answer: "both",
		suplement: "Terezka kvůli plavání 🏊, Ondra kvůli parní sauně 🫠",
	},
	{
		question: "Kdo rád žehlí?",
		answer: "neither",
		suplement: "",
	},
	{
		question: "Kdo rád uklízí?",
		answer: "both",
		suplement: "Ondra tím rád prokrastinuje 🤫",
	},
	{
		question: "Kdo umí lépe šít?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Čí plyšáci nemluví?",
		answer: "both",
		suplement:
			"Terezčini plyšáci mluvili do doby, než začala chodit s Ondrou. Pak ale pro dobro jejich vztahu umlkli... 🤐",
	},
	{
		question: "U koho je tabulka s odpočtem dní do svatby?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo častěji přepisuje tabulku s odpočtem dní do svatby?",
		answer: "ondra",
		suplement: "",
	},
	{
		question:
			"Kdo omdlévá v šalině (brněnská tramvaj, pozn. red.) po darování krve?",
		answer: "ondra",
		suplement: "",
	},
	{
		question: "Kdo byl častěji odmítnut jako dárce krve?",
		answer: "terez",
		suplement: "...málo železa 😔",
	},
	{
		question: "Komu nedělá problém vypít 5 panáků slivovice při degustaci?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo po otřesu mozku viděl hlemýždě na stěně?",
		answer: "terez",
		suplement: "🐌",
	},
	{
		question: "Kdo chodil v dětství do folklorního tanečního souboru?",
		answer: "both",
		suplement: "Terezka do Valášku, Ondra do Opavičky",
	},
	{
		question: "Kdo se objevil v televizi?",
		answer: "ondra",
		suplement: "Hledejte v archivu pořadu Šikulové ✂️",
	},
	{
		question: "A poslední otázka.. Kdo se více těší na svatbu?",
		answer: "both",
		suplement: "💗💖",
	},
];

// <input type="radio" name="answer${id}" id="ondra${id}" checked='checked'/>
finalHTML = "";
let id = 0;
questions_arr.forEach((item) => {
	finalHTML += `
    <div class="question-card">
        <div class="question">${item.question}</div>
			<div class="answer-buttons-box">
				<label class='radio-container'> Ondra
					<input type="radio" name="answer${id}" id="ondra${id}"/>
					<span class="checkmark" id="ondra${id}_checkmark"></span>
				</label>
				<label class='radio-container'> Terezka
					<input type="radio" name="answer${id}" id="terez${id}"/> 
					<span class="checkmark" id="terez${id}_checkmark"></span>
				</label>
				<label class='radio-container'> Oba
					<input type="radio" name="answer${id}" id="both${id}"/>
					<span class="checkmark" id="both${id}_checkmark"></span>
				</label>
				<label class='radio-container'> Ani jeden
					<input type="radio" name="answer${id}" id="neither${id}" checked='checked'/> 
					<span class="checkmark" id="neither${id}_checkmark"></span>
				</label>
			</div>
        <div class="answer-supplement"></div>
        </div>
    `;
	id++;
});

finalHTML += `
	<button class="show-answers-btn" onclick='showAnswers(); this.disabled = true;' name="Ukázat správné odpovědi"/>Ukázat správné odpovědi</button>
`;
document.getElementById("about-content").innerHTML += finalHTML;


// var radioButtons = document.getElementsByClassName("your class name");
// for(var i=0;i<radioButtons.length;i++) {
//    radioButtons[i].disabled = true;
// }



function showAnswers() {
	let questions_cards_divs = document.getElementsByClassName("question-card");
	for (let q_id = 0; q_id < questions_arr.length; q_id++) {
		let radio_containers =
			questions_cards_divs[q_id].getElementsByClassName(
				"radio-container"
			);
		for (let rad_id = 0; rad_id < radio_containers.length; rad_id++) {
			console.log(radio_containers[rad_id]);
			let radio_input =
				radio_containers[rad_id].querySelectorAll("input")[0];
			let radio_design =
				radio_containers[rad_id].querySelector(".checkmark");
			if (radio_input.checked) {
				if (
					radio_input.id ==
					questions_arr[q_id].answer + q_id.toString()
				) {
					radio_design.style.backgroundColor = "green";
					if (questions_arr[q_id].suplement)
						radio_containers[rad_id].innerHTML +=
							" - " + questions_arr[q_id].suplement;
						radio_containers[rad_id].querySelectorAll("input")[0].checked = "checked";
						radio_containers[rad_id].querySelectorAll("input")[0].disabled = "true";
						// radio_input.checked = "checked";
				} else {
					radio_design.style.backgroundColor = "red";
				}
			} else {
				if (
					radio_input.id ==
					questions_arr[q_id].answer + q_id.toString()
				) {
					radio_design.style.backgroundColor = "green";
					if (questions_arr[q_id].suplement)
						radio_containers[rad_id].innerHTML +=
							" - " + questions_arr[q_id].suplement;
						radio_containers[rad_id].querySelectorAll("input")[0].disabled = "true";
				} else {
					radio_design.style.backgroundColor = "";
				}
			}
			radio_input.disabled = true;
			// radio_input.checked = "checked";
		}
	}
}
