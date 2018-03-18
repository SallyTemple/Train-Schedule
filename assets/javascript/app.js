
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
  var firstTrainTime= "";
  var frequency= "";
  
  
  // get info from form
  $("#submitButton").on("click", function (event) {
      // Preventing the buttons default behavior when clicked (which is submitting a form)
      event.preventDefault();
      // This line grabs the input from the textbox
      name = $("#trainName").val().trim();
      date = $("#destination").val().trim();
      role = $("firstTrainTime").val().trim();
      rate = $("#frequency").val().trim();
  
      database = usersRef.push({
  
          name : trainName,
          date : destination,
          role : firstTrainTime,
          rate : frequency
  
      })
  });
  