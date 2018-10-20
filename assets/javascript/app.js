var submitButton = $(".add-train-button");

//accepting user input when submit button is clicked
submitButton.on("click", function (event) {
    event.preventDefault();
    var trainSched = getUserInput();
    console.log(trainSched);
    if (trainSched) {
        fireAddTrain(trainSched);
        resetInput();
    }
    event.stopPropagation();
});

//listener for when data is added to firebase it is returned so it can be used to make moment caclulations to be written to the DOM
trainRef.on("child_added", function (childSnapshot) {
    var childSnapshotData = childSnapshot.val();
    var presentTime = moment();
    //converts train times from military time to 12 hour format and stores it to a variable
    var momentFirstTrain = moment(childSnapshotData.firstTrainTime, "HH:mm").subtract(10, "years").format('X');
    console.log(momentFirstTrain);
    //stores cuurent time into a variable
    console.log(presentTime);
    //find out the number of minutes between now and when the first train came and stores it to a variable
    var timeBetweenTrains = presentTime.diff(momentFirstTrain, "minutes");
    console.log(timeBetweenTrains);
    //get the remainder of diving time between trains in minutes divided by the train frequency which is the first variable needed to determine homw many minutes until the next train arrives
    var minutesRemain = timeBetweenTrains % childSnapshotData.frequency;
    console.log(minutesRemain);
    //find out how many minutes until the next train arrives and stores it to a variable
    var minNextTrain = childSnapshotData.frequency - minutesRemain;
    console.log(minNextTrain);
    //get the time the next train arrives by taking the current time and adding how many minutes til next train to it
    var nextTrainTime = presentTime.clone().add(minNextTrain);
    console.log(nextTrainTime);
    //format time back 12 hr
    var timeAmPm = moment(nextTrainTime.format("hh:mm"));
    console.log(timeAmPm);

    var newRow = $("<tr>").append(
        $("<td>").text(childSnapshotData.trainName),
        $("<td>").text(childSnapshotData.destination),
        $("<td>").text(frequency),
        $("<td>").text(timeAmPm),
        $("<td>").text(minNextTrain)
    );

    $("#train-table > tbody").append(newRow);
});