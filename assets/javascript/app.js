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
    //stores cuurent time into a variable
    var presentTime = moment();
    //converts train times from military time to 12 hour format and stores it to a variable
    let convertTime = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    let diffTime = presentTime.diff(moment(convertTime), "minutes");
    //get the remainder of dividng time between trains in minutes divided by the train frequency which is the first variable needed to determine homw many minutes until the next train arrives
    let remainder = diffTime % childSnapshotData.frequency;
    let minNext = childSnapshotData.frequency - remainder;
    let nextTrain = moment().add(minNext, "minutes");
    let formatNextTrain = moment(nextTrain).format("hh:mm");


    //find out how many minutes until the next train arrives and stores it to a variable


    //get the time the next train arrives by taking the current time and adding how many minutes til next train to it


    var newRow = $("<tr>").append(
        $("<td>").text(childSnapshotData.trainName),
        $("<td>").text(childSnapshotData.destination),
        $("<td>").text(childSnapshotData.frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutes)
    );

    $("#train-table > tbody").append(newRow);
});