



window.onload = function()
{
//    setCanvasSize();

    var canvas  = document.getElementById("canvas");
    var context = canvas.getContext('2d');
    //On n'oublie pas de récupérer le canvas et son context.

    var w = canvas.width = 500;//$('body').width();
    var h = canvas.height =  300;//$('body').height();

//    var myInterval = setInterval(animate, 1000/30); //Notre boucle de rafraîchissement.

    var xPos = 0;
    var yPos = 0;
    var sizeBall = 1;
    var vitX=1;
    var vitY=1;
    //On n'oublie pas de récupérer l'objet canvas et son context.


    //On n'oublie pas de récupérer le canvas et son context.

    context.beginPath();//On démarre un nouveau tracé
    context.moveTo(0, 300);//On se déplace au coin inférieur gauche
    context.lineTo(150, 0);
    context.lineTo(300, 300);
    context.lineTo(0, 300);
    context.stroke();//On trace seulement les lignes.
    context.closePath();

    var xPoint = 57;
    var yPoint = 186;
    drawBall(xPoint,yPoint);

    function isPointInPoly(poly, pt){
        for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
            ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
                && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
            && (c = !c);
        return c;
    }
    var polygon = [
        {x:0,y:300},
        {x: 150, y: 0},
        {x: 300, y: 300},
        {x: 0, y: 300},
    ];
    console.log(isPointInPoly(polygon,{x:xPoint,y:yPoint}));

    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if(yPos+1+(sizeBall*2) > h){
            vitY = -1;
        }  else if(yPos+1+(sizeBall) < 0) {
            vitY = 1;
        }
        if(xPos+1+(sizeBall*2) >w){
            vitX = -1;
        } else if(xPos+1+(sizeBall) < 0) {
            vitX = 1;
        }

        yPos = yPos+(vitY*1);
        xPos = xPos+(vitX*1);

        drawBall(xPos,yPos);
    }

    function drawBall(x,y){
        context.beginPath(); //On démarre un nouveau tracé.
        context.arc(sizeBall+x, sizeBall+y, sizeBall, 0, Math.PI*2); //On trace la courbe délimitant notre forme
        context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
        context.closePath();
    }
}


//$(window).on('resize',function(){
//    setCanvasSize();
//});
//
//function setCanvasSize(){
//    var width  = $(window).width();
//    var height = $(window).height();
//    $('#canvas').attr('width',width);
//    $('#canvas').attr('height',height);
//}