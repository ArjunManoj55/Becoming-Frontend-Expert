// mesure the effficiency of a algorithm,

// low  time complexity - high speed (good thing)

// its speed effciency when input size grow,

// liner seach [2,56,14,05] -> for loop seach and compare all,---------------
//if n = 1000 , x = 1000

// binary seach (shold be sorted array) faster,----------------------------------

// [2, 5, 8, 12, 16, 23, 38]
// We want to find 16.

// Step-by-step:
// Find the middle element → 12

// Compare:

// 16 > 12 → search the right half

// New middle → 23

// Compare:

// 16 < 23 → search the left half

// Middle → 16 ✅ Found!------------------------------------------------------ n/2 ^x

//x = log   n
// if n = 1000 , x = 10

//BIG O NOTATION - TO REPRESENT WROST CASE SCENARIO OF ALGORITHMS-----------

//linere search - O(n)
 
//binary search -  O(log n)

// in nested loops - O(n^2) - 2 loops / O(n^3) if 3 loops
//if 2 independed loops are running - -> O(2n) -> O(n) (ignore the no because it small diff)

// if 1 loop and inside a binary search - O(n * log n) eg:merge sort


// rest of timecomplexity
// O(2^n)
// O(n!)

// constant time complexity -> O(1)
// n=1/n=1000 -> x = 1; it dosent vary according to input

//SPACE COMPLEXITY ( HOW MUCH SPACE USING )---------------------------

// like using a variable

//using an array of size n ->  O(n)

// for declaed array ( countable ) its constant -> O(1)

// if its a 2D matrix - O(n^2)

//so if its O(n^2 + n) it becomes O(n^2) - > +n is a small value