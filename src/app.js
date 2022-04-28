import { loadTheModel,display_prediction,read_in_image } from './util';

// Add functionality to the image upload button
read_in_image();


console.log('Hello, world!');

// EVERYTHIN YOU WANNA DO WITH THE MODEL NEEDS TO BE AFTER PROMISE IS RESOLVED
// I.E. You must run prediction in here
loadTheModel().then(x => {
    var model = x;
    console.log("Logging the model from the app.js file:");
    console.log(model);
});

var prediction = "Positive example";

display_prediction(prediction);








