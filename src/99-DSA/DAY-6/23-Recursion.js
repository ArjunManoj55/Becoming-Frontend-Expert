// function that calls itself

// base case -> stop condition - when  to stop calling

// recursive case -> part of function that calls itself

// ----------------------------------------------------------------------------------------

function recursion() {
    console.log("hi");
    recursion()
}

recursion();

//infinate loop; write a base case to stop

function fun(num) {
    if(num == 0) return; // this is base case will be on top always;
    console.log(num)
    num = num - 1;
    fun(num);
}

// WHEN TO USE

// PROBLEMS CAN BE BROKEN AS SUB PROBLEMS
// TREES/GRAPH
// BACKTRACKING/DP/DIVIDE & CONQUER