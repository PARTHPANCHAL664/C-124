function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 370);
    video.position(25,190)

    canvas = createCanvas(600,400)
    canvas.position(650,190)

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}

function draw()
{
    background('#FF0000');
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
     {
        console.log(results);
     }
}