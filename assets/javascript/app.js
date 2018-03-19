
      var config = {
            apiKey: "AIzaSyCPNwSyaGeIqBSCirWVWg_v5I3tUuTWWzY",
            authDomain: "train-schedule-6eb48.firebaseapp.com",
            databaseURL: "https://train-schedule-6eb48.firebaseio.com",
            projectId: "train-schedule-6eb48",
            storageBucket: "train-schedule-6eb48.appspot.com",
            messagingSenderId: "699923413540"
      };
      firebase.initializeApp(config);

      //Create a variable to reference the database
      var database = firebase.database();



      // Submit new train schedule information to the database
      $("#submitButton").on("click", function () {
            event.preventDefault();

            // Create variables for the different in the colomns
            var trainName = "";
            var destination = "";
            var firstTrainTime = 0;
            var frequency = 0;

            //Get the user input
            trainName = $("#input1").val().trim();
            destination = $("#input2").val().trim();
            firstTrainTime = $("#input3").val().trim();
            frequency = $("#input4").val().trim();

            //Create variable to hold the train data
            var newTrainSchedule = {
                  newTrainName: trainName,
                  newDestination: destination,
                  newFirstTrainTime: firstTrainTime,
                  newFrequency: frequency
            }
            //Create a function to push the new train schedule into firebase
            database.ref().push(newTrainSchedule);


            //Create a function to clear the textbox after each input
            $("#input1").val("");
            $("#input2").val("");
            $("#input3").val("");
            $("#input4").val("");

            return false;
      });

      //Adding a new train schedule in the database
      database.ref().on("child_added", function (childSnapshot) {
            var trainName = childSnapshot.val().newTrainName;
            var destination = childSnapshot.val().newDestination;
            var firstTrainTime = childSnapshot.val().newFirstTrainTime;
            var frequency = childSnapshot.val().newFrequency;




            // First Time 
            var firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
            
            // Current Time
            var currentTime = moment();

            // Difference between the times
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");


            // Time apart (remainder)
            var tRemainder = diffTime % frequency;


            // Minutes Until Train
            var tMinutesTillTrain = frequency - tRemainder;


            // Next Train
            var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");

            //Append Train Table Display
            $("#trainTable > tbody").append(
                  "<tr><td>" + trainName +
                  "</td><td>" + destination +
                  "</td><td>" + nextTrain +
                  "</td><td>" + frequency +
                  "</td><td>" + tMinutesTillTrain +
                  "</td></tr>");

      });


