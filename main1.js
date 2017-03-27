'use strict';

var calculator = {

    a: +prompt('значение 1'),
    b: +prompt('значение 2'),
    read: function () {
        console.log(this.a,this.b);
    },
    sum: function () {
        return console.log(this.a+this.b);
    },
    mul: function(){
        return console.log(this.a*this.b);
    }

};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
