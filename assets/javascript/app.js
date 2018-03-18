
  var config = {
    apiKey: "AIzaSyCPNwSyaGeIqBSCirWVWg_v5I3tUuTWWzY",
    authDomain: "train-schedule-6eb48.firebaseapp.com",
    databaseURL: "https://train-schedule-6eb48.firebaseio.com",
    projectId: "train-schedule-6eb48",
    storageBucket: "train-schedule-6eb48.appspot.com",
    messagingSenderId: "699923413540"
  };
  firebase.initializeApp(config);

  //Create a click function that links to database
  var database = firebase.database();

  var trainName= "";
  var destination= "";
  var firstTrainTime= 0;
  var frequency= 0;
  
  
  // get info from form
  $("#submitButton").on("click", function(event) {
      event.preventDefault();
      
      trainName = $("#trainName").val().trim();
      destination = $("#destination").val().trim();
      firstTrainTime = $("firstTrainTime").val().trim();
      frequency = $("#frequency").val().trim();
  
     
  var newTrainSchedule = {
      trainName : trainName,
      destination : destination,
      firstTrainTime: firstTrainTime,
      frequency : frequency
  
      }
      database.ref().push(newTrainSchedule);
});