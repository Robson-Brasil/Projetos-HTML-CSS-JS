  var firebaseConfig = {					// Your web app's Firebase configuration
    apiKey: "AIzaSyCUEOtxKcTP2p1SQUs4df1UUeqj0BoJXBc",
    authDomain: "led-web.firebaseapp.com",
    databaseURL: "https://led-web.firebaseio.com",
    projectId: "led-web",
    storageBucket: "led-web.appspot.com",
    messagingSenderId: "175865998491",
    appId: "1:175865998491:web:490890ea08beff7e0f2a3e",
  };
  firebase.initializeApp(firebaseConfig);	// Initialize Firebase

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == 1){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == 1){
			firebaseRef.set(0);
			Led1Status = 0;
		} else {
			firebaseRef.set(1);
			Led1Status = 1;
		}
	})
});