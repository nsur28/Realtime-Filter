function preload(){
    console.log("preload")
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center()
}
function take_snapshot(){
    save('myfilterimage.png')
}