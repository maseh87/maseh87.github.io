//Function that sorts arrays from smallest to largest

// var sort = function(array) {
//   //loop through array stop at 1 minus the length
//   for(var i = 0; i < array.length -1; i++) {
//     //for everyone one thing loop again
//     //set a variable named swapping to use later when swapping numbers
//     for(var j = 0, swappping; j < array.length; j++) {
//       //if current is greater than next swap them
//       if(array[j] > array[j + 1]) {
//         //set a empty swapping variable equal to current plus 1
//         swapping = array[j + 1];
//         //set current plus 1 equal to current
//         array[j + 1] = array[j];
//         // set current equal to the swapping variable
//         array[j] = swapping;
//       }
//     }
//   }
//   console.log(array);
// };



var sort = function (list) {

    var comparisons = 0,
        swaps = 0,
        endIndex = 0,
        len = list.length - 1;

    for (var i = 0; i < len; i++) {

        for (var j = 0, swapping, endIndex = len - i; j < endIndex; j++) {
            comparisons++;

            if (list[j] > list[j + 1]) {

                swapping = list[j];

                list[j] = list[j + 1];
                list[j + 1] = swapping;

                swaps++;
            };
        };
    }

    console.log("--Bubble Sort--");
    console.log("Comparisons: " + comparisons);
    console.log("Swaps: " + swaps);

    console.log(list);
};
sort([23,7,24,8,27,45,4361378]);