// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUEOtxKcTP2p1SQUs4df1UUeqj0BoJXBc",
    authDomain: "led-web.firebaseapp.com",
    databaseURL: "https://led-web.firebaseio.com",
    projectId: "led-web",
    storageBucket: "led-web.appspot.com",
    messagingSenderId: "175865998491",
    appId: "1:175865998491:web:490890ea08beff7e0f2a3e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	var Led5Status;
	var Led6Status;
	var Led7Status;
	var Led8Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
		Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;
		Led5Status = snap.val().Led5Status;
		Led6Status = snap.val().Led6Status;
		Led7Status = snap.val().Led7Status;
		Led8Status = snap.val().Led8Status;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
		if(Led5Status == "1"){
			document.getElementById("unact4").style.display = "none";
			document.getElementById("act4").style.display = "block";
		} else {
			document.getElementById("unact4").style.display = "block";
			document.getElementById("act4").style.display = "none";
		}
		if(Led6Status == "1"){
			document.getElementById("unact5").style.display = "none";
			document.getElementById("act5").style.display = "block";
		} else {
			document.getElementById("unact5").style.display = "block";
			document.getElementById("act5").style.display = "none";
		}
		if(Led7Status == "1"){
			document.getElementById("unact6").style.display = "none";
			document.getElementById("act6").style.display = "block";
		} else {
			document.getElementById("unact6").style.display = "block";
			document.getElementById("act6").style.display = "none";
		}
		if(Led8Status == "1"){
			document.getElementById("unact7").style.display = "none";
			document.getElementById("act7").style.display = "block";
		} else {
			document.getElementById("unact7").style.display = "block";
			document.getElementById("act7").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");
		if(Led1Status == "1"){
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("Led2Status");
		if(Led2Status == "1"){
			firebaseRef.set("0");
			Led2Status = "0";
		} else {
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Led3Status");
		if(Led3Status == "1"){
			firebaseRef.set("0");
			Led3Status = "0";
		} else {
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("Led4Status");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
	$(".toggle-btn4").click(function(){
		var firebaseRef = firebase.database().ref().child("Led5Status");
		if(Led5Status == "1"){
			firebaseRef.set("0");
			Led5Status = "0";
		} else {
			firebaseRef.set("1");
			Led5Status = "1";
		}
	})
	$(".toggle-btn5").click(function(){
		var firebaseRef = firebase.database().ref().child("Led6Status");
		if(Led6Status == "1"){
			firebaseRef.set("0");
			Led6Status = "0";
		} else {
			firebaseRef.set("1");
			Led6Status = "1";
		}
	})
	$(".toggle-btn6").click(function(){
		var firebaseRef = firebase.database().ref().child("Led7Status");
		if(Led7Status == "1"){
			firebaseRef.set("0");
			Led7Status = "0";
		} else {
			firebaseRef.set("1");
			Led7Status = "1";
		}
	})
	$(".toggle-btn7").click(function(){
		var firebaseRef = firebase.database().ref().child("Led8Status");
		if(Led8Status == "1"){
			firebaseRef.set("0");
			Led8Status = "0";
		} else {
			firebaseRef.set("1");
			Led8Status = "1";
		}
	})
});