/**
 * File with all the functions we need to call
 */
 import * as tf from '@tensorflow/tfjs';
 import {L2} from './classes';


 // Hosted, pre-trained model.
 const HOSTED_MODEL_URL =
 'https://storage.googleapis.com/compression-models/models/test-resnet20/model.json';


/**
 * Function to load the model
 * TODO should this be based on a hosted URL or a locally served file? Have had
 * a lot of trouble trying to get both to work
 * 
 * @returns the pre-trained model
 */
export async function loadTheModel() {
    tf.serialization.registerClass(L2);
    var model = await tf.loadLayersModel(HOSTED_MODEL_URL);
    // model = await tf.loadLayersModel('./model.json');
    // model = await tf.loadLayersModel(LOCAL_URL);
    console.log("Logging the model from the utils file");
    console.log(model);

    const a = tf.zeros([2,32,32,3]);
    // const b = tf.tensor([a]);
    // b.print(true);
    const p = model.predict(a);
    const pred_data = p.dataSync();
    console.log(`Prediction: ${p}`);
    console.log(`Predicted labels: ${p.argMax(1)}`)

    return await model;
}

 
/**
 * Function to read in an image
 * 
 * TODO how to convert image to tensor and then how to normalize/pre-process?
 */
export function read_in_image(){
    const image_input = document.querySelector("#image-input");

    if (image_input){
        image_input.addEventListener("change", function() {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const uploaded_image = reader.result;

                // Display image in the display-image div
                // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
                
                // Display image in the #img img tag
                document.querySelector('#img').src = uploaded_image;
                
                
                var myImage = new Image();
                myImage.src = uploaded_image;

                myImage.onload = function() {

                    var t = get_img_tensor(myImage);
                    console.log('The tensor is: ');
                    t.print(true);

                    // TODO: add inference/preprocessing logic here
                }
            });
            reader.readAsDataURL(this.files[0]);
            });
    }
}

/**
 * Takes in an image and returns the tensor of that image
 * @param {HTMLImageElement} myImage 
 * @returns tensor of the pixel data in myImage
 */
function get_img_tensor(myImage){

    myImage.width = myImage.naturalWidth;
    myImage.height = myImage.naturalHeight;

    console.log(`Height is ${myImage.height}`);
    console.log(`Width is ${myImage.width}`);

    var t = tf.browser.fromPixels(myImage);

    return t;
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
