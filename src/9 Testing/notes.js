// unit testing - ine component at a time
//integration testing - testing multiple components communication  
// end to end - user comes to user leave (simulating user flow)

//unit testing--------------------------------
//recat testing lib - uses jest

// __test__ -> sum.test.js -> to test sum.js
//import sum here
test("it should calculate sum of two functions", () => { // description

    const result = sum(3,4);

    //assertion
    expect(result).toBe(7); 

})
