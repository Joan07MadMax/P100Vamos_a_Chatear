var firebaseConfig = {
    apiKey: "AIzaSyBZ2yoSoawxTLoC6sADU1T-NsYmGXDb6-w",
    authDomain: "redsocial-7f93c.firebaseapp.com",
    databaseURL: "https://redsocial-7f93c-default-rtdb.firebaseio.com",
    projectId: "redsocial-7f93c",
    storageBucket: "redsocial-7f93c.appspot.com",
    messagingSenderId: "608934971379",
    appId: "1:608934971379:web:e1c287584145003a6c7486"
  };
  
  // Initialize Firebase
  firesbase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + " bienvenid@!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location.replace("kwitter_page.html");
  }

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    })
    
    snapshot.forEach(function(childSnapshot) {childkey = childSnapshot.key;
      Room_names = childkey;
      console.log("Room_name - " + Room_names);
      row = "<div class = 'room_names' id='+Room_names+ "
    })
  }
  