Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#webcam_view");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_view").innerHTML="<img src='"+data_uri+"'id='captured_image' >" 
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CBD24lnON/model.json",modelLoaded);
function modelLoaded(){
    console.log("Loaded");
}
function identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img,got_result)
}
function got_result(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("emotion_1").innerHTML=result[0].label;
    document.getElementById("emotion_2").innerHTML=result[1].label;
    if(result[0].label=="Sleepy"){
        document.getElementById("emoji_1").innerHTML="&#x1F62A;";
    }
    if(result[0].label=="Happy"){
        document.getElementById("emoji_1").innerHTML="&#x1F603;";
    }
    if(result[0].label=="Sad"){
        document.getElementById("emoji_1").innerHTML="&#x1F625;";
    }
    if(result[0].label=="Angry"){
        document.getElementById("emoji_1").innerHTML="&#x1F620;";
    }
    if(result[1].label=="Sleepy"){
        document.getElementById("emoji_2").innerHTML="&#x1F62A;";
    }
    if(result[1].label=="Happy"){
        document.getElementById("emoji_2").innerHTML="&#x1F603;";
    }
    if(result[1].label=="Sad"){
        document.getElementById("emoji_2").innerHTML="&#x1F625;";
    }
    if(result[1].label=="Angry"){
        document.getElementById("emoji_2").innerHTML="&#x1F620;";
    }
}
}