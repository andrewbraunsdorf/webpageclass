function handleSubmit() {
	const xhttp = new XMLHttpRequest();
	const data = {
		"username": document.getElementById("username").value,
		"password": document.getElementById("password").value
	};
	xhttp.onload = function(){
		console.log(this.responseText);
	};
	
	xhttp.open("POST", "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(data));
}

