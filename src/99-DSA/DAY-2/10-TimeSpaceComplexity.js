// mesure the effficiency of a algorithm,

// low  time complexity - high speed (good thing)

// its speed effciency when input size grow,

// liner seach [2,56,14,05] -> for loop seach and compare all,---------------
//if x = 1000 , x = 1000

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

//x = log base 2 n
// if x = 1000 , x = 10

//min 29