/**
 * File with all the functions we need to call
 */
 import * as tf from '@tensorflow/tfjs';
 import {L2} from './classes';

//  // Adds the CPU backend.
// import '@tensorflow/tfjs-backend-cpu';
// // Import @tensorflow/tfjs-core
// import * as tf from '@tensorflow/tfjs-core';
 // Import @tensorflow/tfjs-tflite.
// import * as tflite from '@tensorflow/tfjs-tflite';


 // Hosted, pre-trained model.
 const HOSTED_MODEL_URL =
 'https://storage.googleapis.com/compression-models/models/test-resnet20/model.json';

 const PRUNED_MODEL_URL = 
 'https://storage.googleapis.com/compression-models/models/test-resnet20-pruned/model.json';

 const CLUSTERED_MODEL_URLS = 
 'https://storage.googleapis.com/compression-models/models/test-resnet20-clustered/model.json';

 const TFLITE_MODEL_URL = 
 'https://storage.googleapis.com/compression-models/models/test-resnet20-quantized/resnet20_quantized.tflite';

 const RES50_MODEL_URL = 
 "https://storage.googleapis.com/compression-models/models/final_models/TFJSModels/ResNet18Cluster_5/model.json";

//  CIFAR-10 labels, using this for testing
const cifar10_labels = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck'];
const labels = ['Normal', 'Pneumonia', 'Covid Positive'];


/**
 * Function to load the model
 * @returns the pre-trained model
 */
export async function loadTheModel() {
    tf.serialization.registerClass(L2);
    console.log(`Loading model from ${RES50_MODEL_URL}`)
    var model = await tf.loadLayersModel(RES50_MODEL_URL);
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

    if (image_input){
        image_input.addEventListener("change", function() {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                display_prediction("Predicting...");
                const uploaded_image = reader.result;

                // Display image in the display-image div
                // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
                
                // Display image in the #img img tag
                document.querySelector('#img').src = uploaded_image;
                
                // HTMLImageElement to predict on
                var myImage = new Image();
                myImage.src = uploaded_image;

                myImage.onload = function() {
                    predict_image(myImage);
                }
            });
            reader.readAsDataURL(this.files[0]);
            });
    }
}

/**
 * Function to do all the preprocessing of the image in order to ensure 
 * that model.predict() works as expected
 * 
 * @param {number[]} img_arr image tensor in array form
 * @returns the preprocessed tensor
 */
function preprocess_img(img_arr){

    // wrap the array and convert to tensor
    // Do this because the predict function expects array of many exmaples
    var a = tf.tensor([img_arr]);

    // Resize to 512x512, not necessary if you're uploading an image from
    //The actual data set
    //Also, normalize by dividing by 255
    a = tf.image.resizeBilinear(a,[512,512]).div(tf.scalar(255));

    return a;
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

    var t = tf.browser.fromPixels(myImage,3);

    return t;
}

/**
 * Runs the model on the input image and displays the prediction on the site
 * 
 * @param {HTMLImageElement} image 
 */
function predict_image(image){

    // Convert the image to a tensor   
    var t = get_img_tensor(image);

    // Convert the tensor to an array
    t.array().then(arr =>{

        // Pre-process the array
        const a = preprocess_img(arr);

        //Load the model
        loadTheModel().then(model=>{

            // Run the prediction
            const p = model.predict(a);  //Soft max probability array
            console.log(`The softmax: ${p}`)
            const p_argmax = p.argMax(1);//Tensor of indices of highest probability labels
            const p_array = p_argmax.array();//Convert tensor to array for indexing

            p_array.then(preds=> {
                // Once tensor is converted to array, use labels array
                // To properly name the prediction 

                const pred_index = preds[0];
                const predicted_label = labels[pred_index];
                display_prediction(predicted_label);

                p.array().then(probs=>{

                    var confidence = probs[0][pred_index];
                    confidence *= 100;
                    const label_conf = `${predicted_label} with confidence ${confidence.toFixed(2)}%`;
                    display_prediction(label_conf);

                });


            });
        });
    });
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
