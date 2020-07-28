var rectangle = {
  width: 200, 
height: 100,
perimeter: function () {
  return rectangle.width + rectangle.width + rectangle.height + rectangle.height;
  }
  area: Function() {
    return rectangle.width * rectangle.height;
  }
};

console.log("The area of the rectangle is " + rectangle.perimeter());

function calcArea(wid, hei) {
  var width = rectangle.width;
  var height = rectangle.height;
  var result = width * height ; 
  return result;
}


//var theArea = calcArea(2, 3);





