//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBAuc6nr_biI4Y7MEbgiMu5RzlVw9AKmhU",
    authDomain: "kwi-data.firebaseapp.com",
    databaseURL: "https://kwi-data-default-rtdb.firebaseio.com",
    projectId: "kwi-data",
    storageBucket: "kwi-data.appspot.com",
    messagingSenderId: "900775824963",
    appId: "1:900775824963:web:2e8b6e7a19f5d329314ef6"
  };
  
  // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

  userName=localStorage.getItem("user_name");
  roomName=localStorage.getItem("room_name");

  function Send()
  {
        msg=document.getElementById("send_msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("send_msg").value="";
  }

function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot)
{ document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key;
childData = childSnapshot.val();
if(childKey != "purpose")
{
firebase_message_id = childKey;
message_data = childData;

//Start code

console.log(firebase_message_id);
console.log(message_data);

//End code
    } });  }); }
getData();


function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location=("index.html");
}