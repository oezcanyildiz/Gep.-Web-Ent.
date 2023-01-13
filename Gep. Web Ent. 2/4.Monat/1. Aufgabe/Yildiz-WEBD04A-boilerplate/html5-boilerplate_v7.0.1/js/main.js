window.onload=function(){
    var canvas=document.querySelector("#meinlogo");
    var context=canvas.getContext('2d');
    context.strokeStyle="rgb(0,220,0)";
    context.lineWidth=6;;
    context.beginPath();
    //o 

    context.moveTo(105,15);
    context.lineTo(110,15); 

    context.moveTo(115,15);
    context.lineTo(120,15); 

    context.moveTo(100,25);
    context.lineTo(100,75);

    context.moveTo(97,25);
    context.lineTo(130,25);

    context.moveTo(127,25);
    context.lineTo(127,75);

    context.moveTo(97,75);
    context.lineTo(130,75);
    // Y harfi 
    context.moveTo(140,25);
    context.lineTo(155,45);

    context.moveTo(170,25);
    context.lineTo(155,45);

    context.moveTo(155,45);
    context.lineTo(155,75)



    context.stroke();
    context.closePath();

    // y harfi

}