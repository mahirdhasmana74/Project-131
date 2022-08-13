Status = "";
Pen_image = "";

function preload() {
    Pen_image = loadImage("Pen.jpg");
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
    object_Detector.detect(Pen_image, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}
function draw() {
    image(Pen_image, 0, 0, 640, 350);
}