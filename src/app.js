import * as tf from '@tensorflow/tfjs';

 // Hosted, pre-trained generator model.
 const HOSTED_MODEL_URL =
 'https://storage.googleapis.com/tfjs-examples/mnist-acgan/dist/generator/model.json';

//  const HOSTED_MODEL_URL =
//  'https://storage.googleapis.com/compression-models/models/test-resnet20/model.json';


//TODO unsure of how to host the mdoel or get it working with google buckets
// const LOCAL_URL = "http://localhost:1234/model/model.json"

console.log('Hello, world!');

var model = undefined;

async function loadTheModel() {
    model = await tf.loadLayersModel(HOSTED_MODEL_URL);
    // model = await tf.loadLayersModel('./model.json');
    // model = await tf.loadLayersModel(LOCAL_URL);
    console.log(model);
}

loadTheModel();
// console.log(model)



// CODE TO READ IN THE IMAGE
// TODO: how to convert image to tensor? How to normalize image to be run
// run in the model? 

function read_in_image(){
    const image_input = document.querySelector("#image-input");

    // console.log("The image input is: ");
    // console.log(image_input);

    if (image_input){
        image_input.addEventListener("change", function() {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const uploaded_image = reader.result;
                document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
            });
            reader.readAsDataURL(this.files[0]);
            });
    }
}

read_in_image();

console.log("this oughtta print");


function display_prediction(pred){
    const pred_output = document.querySelector('#prediction-output');

    pred_output.innerHTML = pred;
}

display_prediction('Positive Example');








