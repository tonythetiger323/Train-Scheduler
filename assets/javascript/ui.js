function validateUserInput(input) {
    if (!input) {
        return false;
    }
    return true;
}
//function to get user input
function getUserInput() {
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    if (validateUserInput(trainName) && validateUserInput(destination) && validateUserInput(firstTrainTime) && validateUserInput(frequency)) {

        var newTrain = {
            trainName,
            destination,
            firstTrainTime,
            frequency
        };
        return newTrain;
    }
    return undefined;
}

//function to clear input fields
function resetInput() {
    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");
}




