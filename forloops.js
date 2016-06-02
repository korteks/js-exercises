// var jedi1 = { 
//   name: 'Luke',
//   saberColor: 'green',
//   power: 8,
// }

// var jedi2 = {
//   name: 'Obi Wan', 
//   saberColor: 'blue',
//   power: 5,
// }

// var jedi3 = {
//   name: 'Anakin',
//   saberColor: 'blue',
//   power: 10,
// }

function Jedi (name, saberColor, power) {
  this.name       = name ;
  this.saberColor = saberColor ;
  this.power      = power ;
}

var jedi1 = new Jedi('Luke', 'green', 8) ;
var jedi2 = new Jedi('Anakin', 'blue', 10) ;
var jedi3 = new Jedi('Obi-wan', 'blue', 5) ;

function filter(a, test) {
  var b = new Array(a.length);
  var count = 0;

  for (var k = 0; k < a.length; k++) {
    var result = test(a[k]);

    if (result === false) {
      continue;
    }

    b[count] = a[k];
    count++;
  }
 return b ;
}

var a = [jedi1, jedi2, jedi3] ;
function test0 (d) {
	return d ;
}

var test = {
  luke: function test_luke (d) {
    if (d.name === 'Luke') {
      return true ;
    } else {
      return false ;
    }
  },
} ;

var b = filter(a, test.luke) ;
console.log ('b', b) ;