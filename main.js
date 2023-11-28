Webcam.set({
    width: 410,
    height: 300,
    image_format: "png",
    png_quality: 90

})

camera = document.getElementById("camera");
Webcam.attach(camera);


function capImg(){
    Webcam.snap(function(data_uri){
        document.getElementById("obj").innerHTML = '<img id = "ImageCap" src = "'+data_uri+'" />';
    });
}

console.log("versao ml5", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WOVLgcn4H/model.json" ,modelLoaded);
function modelLoaded(){
    console.log("Modelo Carregado")
}