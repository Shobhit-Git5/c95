//ADD YOUR FIREBASE LINKS 
const firebaseConfig = {
    apiKey: "AIzaSyAdtiNbuHpkBfLAdd6bSXQLWcvmAru6xo8",
    authDomain: "new-firebase-e9b75.firebaseapp.com",
    databaseURL: "https://new-firebase-e9b75-default-rtdb.firebaseio.com",
    projectId: "new-firebase-e9b75",
    storageBucket: "new-firebase-e9b75.appspot.com",
    messagingSenderId: "411120709532",
    appId: "1:411120709532:web:becc05728fee4cde432259",
    measurementId: "G-3426NX7KWS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{ room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
}); }); }
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html"; }
function addUser() { user_name = document.getElementById("user_name").value; localStorage.setItem("user_name", user_name); window.location = "kwitter_room.html"; }