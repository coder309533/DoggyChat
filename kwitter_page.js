//YOUR FIREBASE LINKS
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
roomName = localStorage.getItem("roomName");

function send() {
    msg = document.getElementById("messeger").value;
    firebase.database().ref(roomName).push({
          name: username,
          message: msg,
          like: 0
    });

    document.getElementById("messeger").value = "";




}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message']
like=message_data['like'];
namewithtag="<h4> " + name+"<img class='user_tick' src='tick.png'> </h4>";
messagewithtag="<h4 class='message_h4'>" +message+"</h4>";
like_button="<button class='btn btn-info' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up' >Like:"+like+"</span> </button> <hr>";
row=namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;

    

                      //End code
                }
          });
    });
}
getData();