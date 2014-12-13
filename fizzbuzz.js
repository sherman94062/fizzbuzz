//
// programming exercise
// 2014-12-15
// description:
// From STDIN, read in a list of words separated by a space
// Sort the words alphabetically, and print them out VERTICALLY in THREE columns to STDOUT, separated by a space
//  For example, if the input is "b a c e f d i h g", the output should be:
// a d g
// b e h
// c f i

// process command line
var wordInput = process.argv.slice(2);
if (!wordInput.length) {
    console.log('Error: Enter words separated by blanks on the command line');
    console.log('Example: node fizzbuzz.js word1 word2 word3');
    process.exit(1);
}
// parameterize column width for printing - note exceptions in readme
var columnCount = 3;
// determine number of rows to render - rows will dominate columns if wordInput has insufficient elements to cover both
var rowCount = Math.ceil(wordInput.length/columnCount);
// sort the array
wordInput.sort();

var wordArrays = [], ii, len;
// break up the original array into groups of rowCount
for (ii = 0, len = wordInput.length; ii < len; ii += rowCount) {
    wordArrays.push(wordInput.slice(ii, ii + rowCount));
}
// transpose the array into the right output format
var newArray = wordArrays[0].map(function(col, i) { 
  return wordArrays.map(function(row) { 
    return row[i];
  })
});
// print the transposed array
for (ii = 0, len = newArray.length; ii < len; ii++) {
    console.log(newArray[ii].join(' '));
}
