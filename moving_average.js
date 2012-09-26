
var MovingAverage = function( weight, first ) {
    
    this.weight  = weight || 0.1;
    this.average = first  || 0.0;
    
};

MovingAverage.prototype.add_value = function( value ) {
    this.average = (1.0-this.weight)*this.average + this.weight*value;
};

MovingAverage.prototype.set_weight = function( weight ) {
    this.weight = weight;    
};

MovingAverage.prototype.get_average = function() {
    return this.average;
};

module.exports = MovingAverage;
