import { loadTheModel,display_prediction,read_in_image} from './util';

read_in_image();

console.log('Hello, world!');

// EVERYTHING YOU WANNA DO WITH THE MODEL NEEDS TO BE AFTER PROMISE IS RESOLVED
// I.E. You must run prediction in here
// OR maybe not, maybe it's best to run prediction in the app.js file and have it
// be contingent on the event listener
loadTheModel().then(x => {
    var model = x;
    console.log("Logging the model from the app.js file:");
    console.log(model);
});

var prediction = "Positive example";

display_prediction(prediction);







