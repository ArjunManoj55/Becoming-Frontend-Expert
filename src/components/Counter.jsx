// import { useState } from "react";

import { useState } from "react";

// export default function Counter() {
 
//     const [count, setCount] = useState(0)

//     function handleIncrese() {
//         setCount(count+1)
//     }

//     function handleDecrese() {
//         setCount(count-1)
//     }


//   return (
//     <div>
//         <h3>{count}</h3>
//      <button onClick={handleIncrese}>+</button>
//      <button onClick={handleDecrese}>-</button>
//     </div>
//   );
// }

export default function Counter() {

  const [count, setCount] = useState(0)

  function handleIncrese() {
    setCount(count+1)
  }
    function handleDecrese() {
    setCount(count-1)
  }
  
 return(

  <>
  <div>
    <h3>{count}</h3>
    <button onClick={handleIncrese}>+</button>
    <button onClick={handleDecrese}>-</button>
  </div>
  </>
 )

}