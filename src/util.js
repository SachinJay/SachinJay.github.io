/**
 * File with all the functions we need to call
 */
 import * as tf from '@tensorflow/tfjs';


 // Hosted, pre-trained generator model.
 const HOSTED_MODEL_URL =
 'https://storage.googleapis.com/tfjs-examples/mnist-acgan/dist/generator/model.json';

//  const HOSTED_MODEL_URL =
//  'https://storage.googleapis.com/compression-models/models/test-resnet20/model.json';


//TODO unsure of how to host the mdoel or get it working with google buckets
// const LOCAL_URL = "http://localhost:1234/model/model.json"


/**
 * Function to load the model
 * TODO should this be based on a hosted URL or a locally served file? Have had
 * a lot of trouble trying to get both to work
 * 
 * @returns the pre-trained model
 */
export async function loadTheModel() {
    var model = await tf.loadLayersModel(HOSTED_MODEL_URL);
    // model = await tf.loadLayersModel('./model.json');
    // model = await tf.loadLayersModel(LOCAL_URL);
    console.log("Logging the model from the utils file");
    console.log(model);

    return await model;
}

 
/**
 * Function to read in an image
 * 
 * TODO how to convert image to tensor and then how to normalize/pre-process?
 */
export function read_in_image(){
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


/**
 * Function to display the predicted output
 * 
 * @param {string} pred The prediction output by the model
 */
export function display_prediction(pred){
    const pred_output = document.querySelector('#prediction-output');
    pred_output.innerHTML = pred;
}