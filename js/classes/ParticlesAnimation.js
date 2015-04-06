var ParticlesAnimation = function(canvas){
    this.canvas = canvas;
    // main layer
    this.layer = new Kinetic.Layer();
    this.calculateNumberParticles();
    this.createParticles();
};
ParticlesAnimation.prototype.canvas = null;
ParticlesAnimation.prototype.layer = null;
ParticlesAnimation.prototype.numberParticles = null;
ParticlesAnimation.prototype.particles = [];
ParticlesAnimation.prototype.particlesAnimated = [];

ParticlesAnimation.prototype.x = null;
ParticlesAnimation.prototype.x = function(){

};
ParticlesAnimation.prototype.calculateNumberParticles = function(){
    var px2 = (this.canvas.height * this.canvas.width);
    this.numberParticles = px2 * 0.0001;
};
ParticlesAnimation.prototype.createParticles = function(){
    var self = this;
    for(var i=0;i<=this.numberParticles;i++){
        var particle = new Kinetic.Circle({
            y : (Math.random()*self.canvas.height + 0),
            x : (Math.random()*self.canvas.width  + 0),
            width:  (Math.random()*5 +0.1),
            height: (Math.random()*5 +0.1),
            fill: "rgba(255,255,255,"+(Math.random())+")"
        });
        this.particles.push(particle);
        this.layer.add( particle );
    }
};
ParticlesAnimation.prototype.animate = function(){
    var self = this;
    for(var i=0;i<this.particles.length;i++){
        var particle = this.particles[i];

        if(this.isAnimated(particle._id)){
            continue;
        }

        var duration  = (Math.random()*7)+5;
        var animation = new Kinetic.Tween({
            x: (Math.random()*this.canvas.width + 0),
            y: (Math.random()*this.canvas.height + 0),
            duration: duration,
            node : particle,
            easing: Kinetic.Easings.Linear,
            onFinish : function(){
                delete self.particlesAnimated[this.node._id];
            }
        });
        animation.play();
        this.particlesAnimated[particle._id] = animation;
    }
};
ParticlesAnimation.prototype.isAnimated = function(id){
    if(id in this.particlesAnimated){
        return true;
    }
    return false;
};
