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

// unit testing for react component (one component -isolated)
//compoennt
export default Contact =() => {
    return(
        <div>
            <h1 className="font-bold"></h1>
        </div>
    )
}

//test code

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
//import component from path

test("shold load the contact component"), () => {
    render(<Contact /> );

    const heading = screen.getByRole("heading");

    expect (heading).toBeInTheDocument(); 
}

it("shold load button inside the contact component"), () => {
    //test cases
}