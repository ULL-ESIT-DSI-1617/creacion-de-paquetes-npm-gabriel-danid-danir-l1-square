var Square = require("../lib/square.js");

describe("area Square", function() {
  it("debe calcular el area de un cuadrado correctamente", function() {
    var a = new Square({ width: 20 });
    var result = a.area();
     result.should.equal(400);
  })
});