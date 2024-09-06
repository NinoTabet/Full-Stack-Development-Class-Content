import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [info, setInfo] = useState('')

    const handleSubmission = async() => {
        try {
            const x = 5;

            const url = process.env.API_URL

            const response = await fetch(url+`/search?number=${x}`,
                {
                    method: 'POST',
                    headers:{ 'Content-Type': 'application/json' }
                }
            );
    
            if (response.ok){
                const data = await response.json();
                setInfo(data[0]);
            }
        } catch (err) {
            console.error(err);
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