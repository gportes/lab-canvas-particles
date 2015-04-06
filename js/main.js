window.onload = function()
{
    var canvas = new Canvas("container-canvas");
    var particlesAnimation = new ParticlesAnimation(canvas);
    var particlesAnimationWord = new ParticlesAnimationWord(canvas);

    canvas.addLayer( particlesAnimation.layer );

    // animate the canvas
    animate();

    function animate(){
        requestAnimationFrame(animate);
        // animate the background with the particles
        particlesAnimation.animate();
        particlesAnimation.animate();
    }


}


