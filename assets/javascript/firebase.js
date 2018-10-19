//Made a separate file for all things firebase
//Initialize firebase
var config = {
    apiKey: "AIzaSyCsysJ9vQQtBnEODfJHGCqVGYZVHsIkfEg",
    authDomain: "crazy-train-1a279.firebaseapp.com",
    databaseURL: "https://crazy-train-1a279.firebaseio.com",
    projectId: "crazy-train-1a279",
    storageBucket: "",
    messagingSenderId: "641128804801"
};

firebase.initializeApp(config);

//reference to database
var database = firebase.database();

//function to add newTrain data to firebase
function fireAddTrain(inputObject) {
    database.ref().push(inputObject);
}

//firebase listener function to read from firebase, write to DOM, and write back to firebase
database.ref().on("child_added", function (childSnapshot) {
    var childSnapshotData = childSnapshot.val();
    console.log(childSnapshotData);
    return childSnapshotData;
});