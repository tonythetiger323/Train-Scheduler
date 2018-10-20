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

//making database.ref a variable so it can be used in the app.js for the purpose of code separation
var trainRef = database.ref();

//function to add newTrain data to firebase
function fireAddTrain(inputObject) {
    trainRef.push(inputObject);
}
