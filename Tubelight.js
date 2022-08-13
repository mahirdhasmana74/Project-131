Status = "";
Tubelight_image = "";

function preload() {
    Tubelight_image = loadImage("Tubelight.jpg");
}
function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(310,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";  
}
function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Tubelight_image, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}
function draw() {
    image(Tubelight_image, 0, 0, 640, 350);
}