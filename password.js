

function checkPassword() {
	var first = document.getElementById("v1").value;
	var second = document.getElementById("v2").value;
	var third = document.getElementById("v3").value;
	var fourth = document.getElementById("v4").value;
	var fifth = document.getElementById("v5").value;
	var sixth = document.getElementById("v6").value;

	var attempt = first + second + third + fourth + fifth + sixth;

	//password = 72BSA!

	if (first.match('7') && second.match('2') && third.match('B') && fourth.match('S') && fifth.match('A') && sixth.match('!')) {
		window.location.href = "/index2.html";
	}
	else {
		alert("Incorrect passcode.");
	}
}