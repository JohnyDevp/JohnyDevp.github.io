// load questions into the html file
const questions_arr = [
	{
		question: "Kdo má více sourozenců?",
		answer: "neither",
		suplement: "Oba mají 4.",
	},
	{
		question: "Kdo je starší?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo chodí spát a vstává v rozumný čas (když je volno)?",
		answer: "terez",
		suplement: "Terez 22:00-7:00, Ondra 0:30-9:00",
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
		answer: "terez",
		suplement: "Terez chodí plavat. Ondra raději saunu ;)",
	},
	{
		question: "Kdo rád žehlí?",
		answer: "neither",
		suplement: "",
	},
	{
		question: "Kdo rád uklízí?",
		answer: "both",
		suplement: "Ondra tím rád prokrastinuje :D",
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
			"Terezčini plyšáci mluvili do doby, než začala chodit s Ondrou. Pak ale pro dobro jejich vztahu umlkli...",
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
		suplement: "...málo železa😔",
	},
	{
		question: "Komu nedělá problém vypít 5 panáků slivovice při degustaci?",
		answer: "terez",
		suplement: "",
	},
	{
		question: "Kdo má více větších úrazů?",
		answer: "terez",
		suplement: "",
	},
];

finalHTML = "";
let id = 0;
questions_arr.forEach((item) => {
	finalHTML += `
    <div class="question-card">
        <div class="question">${item.question}</div>
        <div class="answer-buttons-box">
            <label class='radio-container'> Ondra
                <input type="radio" name="answer${id}" id="ondra" checked='checked'/>
                <span class="checkmark"></span>
            </label>
            <label class='radio-container'> Terezka
                <input type="radio" name="answer${id}" id="terez"/> 
                <span class="checkmark"></span>
            </label>
            <label class='radio-container'> Oba
                <input type="radio" name="answer${id}" id="both"/>
                <span class="checkmark"></span>
            </label>
            <label class='radio-container'> Ani jeden
                <input type="radio" name="answer${id}" id="neither"/> 
                <span class="checkmark"></span>
            </label>
        </div>
        <div class="answer-supplement"></div>
        </div>
    `;
	id++;
});
document.getElementById("about-content").innerHTML = finalHTML;
