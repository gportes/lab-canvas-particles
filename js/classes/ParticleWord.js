var ParticleWord = function(x,y,xWord,yWord){
    this.xWord = xWord+200;
    this.yWord = yWord+200;
    this.xWordOrigin = xWord+200;
    this.yWordOrigin = yWord+200;

    this.node = new Kinetic.Circle({
        x : x,
        y : y,
        width:  (Math.random()*5 +0.1),
        height: (Math.random()*5 +0.1),
        fill: "rgba(255,255,255,"+(Math.random())+")"
    });
};
ParticleWord.prototype.node = null;
ParticleWord.prototype.y = null;
ParticleWord.prototype.x = null;
ParticleWord.prototype.liberty = 20;

ParticleWord.prototype.animate = function(){
    this._animate();
};
ParticleWord.prototype._animate = function(){
    var self = this;
    var anim = new Kinetic.Tween({
        x: self.xWord+(Math.random()*self.liberty+1),
        y: self.yWord+(Math.random()*self.liberty+1),
        duration: (Math.random()*2)+1,
        node : self.node,
        easing: Kinetic.Easings.Linear,
        onFinish : function(){
            self._animate();
        }
    });
    anim.play();
};
