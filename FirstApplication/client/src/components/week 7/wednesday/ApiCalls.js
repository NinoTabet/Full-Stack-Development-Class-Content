import { useState } from "react"

const ApiCalls = () => {

    const [inputValue, setInputValue] = useState('')

    const [apiResponse, setApiResponse] = useState('')

    // const url = process.env.API_URL;
    const url = process.env.API_URL;
    
    const handleGetSubmission = async () => {

        try {
            
            const response = await fetch(url + `/search?title=${inputValue}`,{
            
                method: 'GET',
                headers:{ 'Content-Type': 'application/json' }
                    
            });

            if(response.ok){
                
                const data = await response.json();
    
                console.log(data);
        
                setApiResponse(data[0].title);
            }

        } catch (err) {
            console.error(err);
        }
        

        // const author = 'Anthony Tabet'
        // const title = inputValue

        // const body = {title, author}

        // const response = await fetch(url + '/create',{
        
        //     method: 'POST',
        //     headers:{ 'Content-Type': 'application/json' },
        //     body: JSON.stringify({body})
            
        // });

        // const data = await response.json();

        // console.log(data.message);
        // setApiResponse(data.message);
    }




    return(
        <>
            <div>
                <input type='search' placeholder="Enter something to search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={handleGetSubmission}>Submit</button>
                <div><strong>Api response :</strong> {apiResponse}</div>
            </div>

            {/* <div>
                <input type='search' placeholder="Enter something to search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={handleSubmission}>Submit</button>
                <div><strong>Current Value:</strong> {inputValue}</div>
            </div> */}
        </>
    )
}

export default ApiCalls