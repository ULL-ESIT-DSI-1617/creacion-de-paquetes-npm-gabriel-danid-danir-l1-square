'use strict'

/**
* Creación de paquetes npm - Triangle
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-gabriel-danid-danir-l1-square
*
* Daniel Díaz García
*
* Team: gabriel-danid-danir-l1
* 
* Modulo npm con el código de la clase Square un método para calcular el área
* 
* @class Square
* @param {hash} options Ancho y Alto 
*/
let Shape = require('@ull-gabriel-danid-danir-l1/ull-shape');
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    /**
     * La función area calcula el área de un cuadrado
     * @param hereda directamente de Shape
     * @return {number} devuelve el área de un cuadrado
    */
    area() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
