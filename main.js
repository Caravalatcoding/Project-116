noseX = 0;
noseY = 0;


function preload()
{
    moustache_filter = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 500, 500);
    image(moustache_filter, noseX, noseY, 100, 50);

}

function onClick()
{
    save('Filtered-image-by-Me.jpg');
}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-50 ;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}