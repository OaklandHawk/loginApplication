 //Project create a function that registers a user on your previous login application. Make sure it's on the same page and doesn't refresh when clicked, since we're not storing the data yet. Test to ensure that the username is not already taken and that the password is atleast 8 characters. 
var objPeople = [
	{
		username: "Tay",
		password: "password1"
	},
	{
		username: "Nat",
		password: "password2"
	},
	{
		username: "Han",
		password: "password3"
	}
]


//login functionality 
function login() {
	//retrieve data input from the form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	//loop through all the user objects and confirm if the username and passwords are correct
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password) {
			console.log(username + " is logged in!!")
			return
		}
	}

	//error if username and password do not match 
	console.log("incorrect username or password")
	}

	function registerUser() {
		var registerUser = document.getElementById("newUser").value
		var registerPassword = document.getElementById("newPassword").value
		var newUser = {
			username: registerUser,
			password: registerPassword
		}

		for(i = 0; i < objPeople.length; i++) {
			if(registerUser == objPeople[i].username) {
				alert("that user  name is already in use, please choose another")
				return
			} else if (registerPassword.length < 8) {
				alert("that passwordis too short, include 8 or more characters")
				return
			}
		}

		objPeople.push(newUser)
		console.log(objPeople)

}