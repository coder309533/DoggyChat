var firebaseConfig = {
    apiKey: "AIzaSyBzt9962jTvZfA9BUeb6hX07dblcZIv-7U",
    authDomain: "sapphires-and-rubies.firebaseapp.com",
    databaseURL: "https://sapphires-and-rubies.firebaseio.com",
    projectId: "sapphires-and-rubies",
    storageBucket: "sapphires-and-rubies.appspot.com",
    messagingSenderId: "723500257601",
    appId: "1:723500257601:web:44cef3a2c4be562259d1c0",
    measurementId: "G-QEHY00CCKN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + username + " !"

function addroom() {
    roomName = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomName).update({
          purpose: "adding roomname"

    });
    localStorage.setItem("roomName", roomName);
    window.location = "kwitter_page.html";

}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room_names -" + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;


                //End code

          });
    });
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "kwitter_page.html";


}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "index.html";


}