// Nested For-Loops

// arise naturally around arrays of arrays
// usually use for loops to loop over arrays
// if the array elements are arrays, you may want an inner-loop over those
// now you have a nested for-loop!

// in most cases, the elements are all arrays with the same length

// e.g. var x = [A_1, A_2, A_3, ..., A_N] ;
// where A_i = an array of length n
// i.e. A_i = [a_i1, a_i2, ..., a_in] ;

// i.e. var x = [[a_11, a_12, ..., a_1n], [a_21, a_22, ..., a_2n], ..., [a_N1, a_N2, ..., a_Nn]] ;

// note that we can space it out 

// i.e. 
// var x = [
//   [a_11, a_12, ..., a_1n], 
//   [a_21, a_22, ..., a_2n], 
//   [a_N1, a_N2, ..., a_Nn]
// ] ;

// question: how do we get a_ij from x? answer: x[i][j]

// question: how do you build x from scratch?
// answer: nested for-loops!

// let's create a specific table or matrix.
// for example, grayscale images are tables of pixel intensities
// now we can think of the a_ij's as intensity values
// so x is a grayscale image and a_ij is an integer from 0, ..., 255

// how would we make a 240-by-320 grayscale image with a vertical gradient? i.e. we want it to look like:

// var x = [
//   [0, 0, ..., 0],
//   [1, 1, ..., 1],
//   [1, 1, ..., 1],
//   [2, 2, ..., 2],
//   [3, 3, ..., 3],
//   [3, 3, ..., 3],
//   ...
//   [255, 255, ..., 255],
// ] ;

function vertical_gradient(Nrow, Ncol) {

  var x = new Array(Nrow) ; // initialize this row of grayscale intensity values

  for ( var krow = 0 ; krow < Nrow ; krow++ ) { // loop over rows of the grayscale image
    
    x[krow] = new Array(Ncol) ; // initialize the array of column values for this row
    
    var intensity = ( krow / (Nrow - 1) ) * 255 ; // compute floating-point grayscale value
    intensity     = Math.round( intensity ) ; // convert to integer value 

    for ( var kcol = 0 ; kcol < Ncol ; kcol++) { // loop over (A_i)_j = a_ij's
      x[krow][kcol] = intensity ;
    }

  }

  return x ;

} ;