Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fwXOyRHU8/',modelLoaded);



function modelLoaded()
{
    console.log("model has been loaded");
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}


function gotResult(error , answer)
{
    if (error)
    {
        console.error(error);
    }
    else{
        console.log(answer);
        document.getElementById("object").innerHTML = answer[0].label;
        document.getElementById("accuracy").innerHTML = answer[0].confidence.toFixed(2);
    }
}