var submitButton = $(".add-train-button");

//accepting user input when submit button is clicked
submitButton.on("click", function (event) {
    event.preventDefault();
    getUserInput();
    console.log(newTrain);
    fireAddTrain(newTrain);
    resetInput();
    event.stopPropagation();
});

//using moment.js with data returned from firebase to convert times so they can be used to make calculations
function momentCalculations(returnedData) {
    //converts train times from military time to 12 hour format and stores it to a variable
    var momentFirstTrain = moment(returnedData.firstTrainTime, "hh:mm");
    console.log(momentFirstTrain);
    //stores cuurent time into a variable
    var presentTime = moment();
    console.log(presentTime);
    //find out the number of minutes between now and when the first train came and stores it to a variable
    var timeBetweenTrains = moment().diff(moment(momentFirstTrain), "minutes");
    console.log(timeBetweenTrains);
    //get the remainder of diving time between trains in minutes divided by the train frequency which is the first variable needed to determine homw many minutes until the next train arrives
    var minutesRemain = timeBetweenTrains % returnedData.frequency;
    console.log(minutesRemain);
    //find out how many minutes until the next train arrives and stores it to a variable
    var minNextTrain = returnedData.frequency - minutesRemain;
    console.log(minNextTrain);
    //get the time the next train arrives by taking the current time and adding how many minutes til next train to it
    var nextTrainTime = moment().add(minNextTrain);
    console.log(nextTrainTime);
    //format time back 12 hr
    var timeAmPm = moment(nextTraintime.format("hh:mm"));
    console.log(timeAmPm);

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(timeAmPm),
        $("<td>").text(minNextTrain)
    );

    $("#train-table > tbody").append(newRow);
}

momentCalculations(childSnapshotData);




