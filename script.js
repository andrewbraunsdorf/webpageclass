function handleSubmit() {
	// const xhttp = new XMLHttpRequest();
	// const data = {
	// 	"username": document.getElementById("username").value,
	// 	"password": document.getElementById("password").value
	// };
	// xhttp.onload = function() {
	// 	console.log(this.responseText);
	// };
	var url = 'https://example.com/profile';
	// var data = { username: 'andrew' };

	const data = {
		"username": document.getElementById("username").value,
		"password": document.getElementById("password").value
	};
	fetch("https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api", {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}

		}).then(res => res.json())
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));

	// .then(function(response) {
	// 	return response.json();
	// })
	// .then(function(myJson) {
	// 	console.log(JSON.stringify(myJson));
	// });

	// xhttp.open("POST", "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api", true);
	// xhttp.setRequestHeader("Content-type", "application/json");
	// xhttp.send(JSON.stringify(data));
}
