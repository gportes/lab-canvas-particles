var Canvas = function(containerCanvas){
    this.setSize();

    // new kinetic object
    this.stage = new Kinetic.Stage({
        container: containerCanvas,
        width: this.width,
        height: this.height
    });
    this.bindEvents();
    this.c = this.stage.context;
    // main layer
    this.mainLayer = new Kinetic.Layer();
    // adds the layer on the stage
    this.stage.add(this.mainLayer);
};
Canvas.prototype.bindEvents = function(){
};
Canvas.prototype.isPointInPoly = function(poly, pt){
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
            && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
    return c;
}
Canvas.prototype.c = null;
Canvas.prototype.height = null;
Canvas.prototype.width = null;
Canvas.prototype.context = null;
Canvas.prototype.mainLayer = null;
Canvas.prototype.stage = null;


Canvas.prototype.addLayer = function(layer){
    this.stage.add( layer );
};
Canvas.prototype.setSize = function(){
    this.height = $("body").height();
    this.width  = $("body").width();
};
