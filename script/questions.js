// load questions into the html file
fetch("./../html/question.html")
	.then((res) => res.text())
	.then((result) => {
		document.getElementById("about-content").innerHTML = result;
	});
