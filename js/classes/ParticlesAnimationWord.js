var ParticlesAnimationWord = function(canvas){
    var self = this;
    this.canvas = canvas;
    // main layer
    this.layer = new Kinetic.Layer();
    this.loadWord('img/canvas/webqam.png',function(image){
        self.setPoints(image);
        self.createParticles();
        self.canvas.addLayer(self.layer);
    });
    this.bindEvents();

};
ParticlesAnimationWord.prototype.canvas = null;
ParticlesAnimationWord.prototype.layer = null;

ParticlesAnimationWord.prototype.numberParticles = null;
ParticlesAnimationWord.prototype.particles = [];
ParticlesAnimationWord.prototype.particlesAnimated = [];
ParticlesAnimationWord.prototype.points = [];
ParticlesAnimationWord.prototype.arcMouse = null;

ParticlesAnimationWord.prototype.x = null;
ParticlesAnimationWord.prototype.loadWord = function(filename,cb){
    var self = this;
    var image = new Image();
    image.src = filename;
    image.onload = function(){
        if(typeof cb == 'function')
            cb.call(self,image);
    };
};
ParticlesAnimationWord.prototype.bindEvents = function(){
    var self = this;
    $("#container-canvas").mousemove(function(e) {
        var pageCrds = {
            x: e.pageX,
            y: e.pageY
        };
        self.checkParticles(pageCrds);
    });
};
ParticlesAnimationWord.prototype.checkParticles = function(pageCrds){
    for(var k in this.particles){
        var particle = this.particles[k];
        if((pageCrds.x+25 > particle.xWord && pageCrds.x < particle.xWord)
        && (pageCrds.y-25 < particle.yWord && pageCrds.y > particle.yWord)
            ){
            particle.yWord = pageCrds.y + 25;
            particle.xWord = pageCrds.x + 25;
        } else {
            particle.yWord = particle.yWordOrigin;
            particle.xWord = particle.xWordOrigin;
        }
    }
};
ParticlesAnimationWord.prototype.setPoints = function(image){
    var canvasTmp = $('<canvas/>')[0];
    canvasTmp.width = image.width;
    canvasTmp.height = image.height;
    canvasTmp.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
    var pixelData = canvasTmp.getContext('2d').getImageData(0,0,image.width,image.height);

    for(var x =0;x<image.width;x+=5){
        for(var y =0;y<image.height;y+=5){
            var p = this.getPixel(pixelData,x,y);
            if(p.a == 255){
                this.points.push({
                    x : x,
                    y : y
                });
            }
        }
    }
};
ParticlesAnimationWord.prototype.getPixel = function( imagedata, x, y ) {

    var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
    return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

};
ParticlesAnimationWord.prototype.createParticles = function(){

    for(var i=0;i<this.points.length;i++){
        var pos = this.points[i];

        var posStart = Math.floor(Math.random()*4+1);
        switch(posStart){
            case 1:
                var start = {
                  x : (Math.random()*this.canvas.width),
                  y : 0
                };
                break;
            case 2:
                var start = {
                    x : this.canvas.width,
                    y : (Math.random()*this.canvas.height)
                };
                break;
            case 3:
                var start = {
                    x : 0,
                    y : (Math.random()*this.canvas.height)
                };
                break;
            case 4:
                var start = {
                    x : (Math.random()*this.canvas.width),
                    y : this.canvas.height
                };
                break;
        }

        var particle = new ParticleWord(start.x,start.y,pos.x,pos.y);
        this.particles.push(particle);
        this.layer.add( particle.node );
    }
    for(var k in this.particles){
        var particle = this.particles[k];
        particle.animate();
    }
};
