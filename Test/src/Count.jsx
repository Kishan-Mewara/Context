import React, { useState } from "react";

function Count(){

    const [Count, setCount] = useState(1)

    const inc = () => {
       setCount (Count+1)
    }

    
    const dec = () => {
        setCount (Count-1)
     }

return(
<>
<button onClick={inc}>+</button>
<h1>{Count}</h1>
<button onClick={dec}>-</button>
</>


)

}

export default Count