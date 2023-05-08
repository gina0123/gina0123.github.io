var maxId = 0; 

  document.getElementById("register").addEventListener("click", function(event) {  
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;   
    getMaxId().then(function(maxId) {
      var newUserId = (maxId + 1).toString();
      var userData = setNewUser(username, password);
      addNewUser(newUserId, userData);
    });
});

function addNewUser(newUserId, userData) {
  var updates = {};
  updates[newUserId] = userData;
  userRegistration.update(updates);
  alert("Deine Registrierung war erfolgreich!\nDu kannst dich ab jetzt einloggen.");
}

function setNewUser(username, password) {
  return {
    username: username,
    password: password
  };
}

// Abrufen der höchsten ID aus der Datenbank
function getMaxId() {
  return new Promise(function(resolve, reject) {
    userRegistration.once("value", function(snapshot) {
      var maxId = 0;
      snapshot.forEach(function(childSnapshot) {
        var id = parseInt(childSnapshot.key);
        if (id > maxId) {
          maxId = id;
        }
      });
      resolve(maxId);
    }, function(error) {
      reject(error);
    });
  });
}
  