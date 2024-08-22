import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [info, setInfo] = useState('')

    const handleSubmission = async() => {
        const x = 5;

        const url = 'http://localhost:3000'

        const response = await fetch(url+`/search?number=${x}`,
            {
                method: 'GET',
                headers:{ 'Content-Type': 'application/json' }
            }
        );

        if (response.ok){
            const data = await response.json();
            setInfo(data[0]);
        }
    }

    return(
        <>
            <button onClick={handleSubmission}>(Parent) - Click Me</button>
            <Child info={info}/>
        </>
    );
}

export default Parent;