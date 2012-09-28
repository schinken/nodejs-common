
var ExponentialSmoothing = function( weight, first ) {
    
    this.weight  = weight || 0.1;
    this.smoothed = first  || 0.0;
    
};

ExponentialSmoothing.prototype.add_value = function( value ) {
    this.smoothed = (1.0-this.weight)*this.smoothed + this.weight*value;
};

ExponentialSmoothing.prototype.set_weight = function( weight ) {
    this.weight = weight;    
};

ExponentialSmoothing.prototype.get_value = function() {
    return this.smoothed;
};

module.exports = ExponentialSmoothing;
