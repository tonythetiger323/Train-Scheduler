//function to validate user actually entered data
function validateUserInput(input) {
    if (!input) {
        return;
    }
}

//function to get user input
function getUserInput() {
    var trainName = $("#trainName").val().trim();
    validateUserInput(trainName);
    var destination = $("#destination").val().trim();
    validateUserInput(destination);
    var firstTrainTime = $("#firstTrainTime").val().trim();
    validateUserInput(firstTrainTime);
    var frequency = $("#frequency").val().trim();
    validateUserInput(frequency);

    newTrain = {
        "trainName": trainName,
        "destination": destination,
        "firstTrainTime": firstTrainTime,
        "frequency": frequency
    };
    return newTrain;
}

//function to clear input fields
function resetInput() {
    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");
}





