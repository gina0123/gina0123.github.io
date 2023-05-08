
document.getElementById("login").addEventListener("click", function(event) {
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value;  

  userRegistration.once("value")
    .then(function(snapshot) {
      var userData = snapshot.val();
      userLogin(userData, username, password);
    })
    .catch(function(error) {
      console.error(error);
    });
});

function userLogin(userData, username, password) {
  var loggedIn = false;
  Object.keys(userData).forEach(function(key) {
    if (checkUserData(userData, key, username, password)) {
      loggedIn = true;
    }
  });
  if (loggedIn) {    
    window.location.href = "mainpage.html";   

  } else {
    wrongUserData(); 
  }
}

function checkUserData(userData, key, username, password) {
  return userData[key].username === username && userData[key].password === password;
}

function wrongUserData() {
  alert("Falscher Username oder Passwort!");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

