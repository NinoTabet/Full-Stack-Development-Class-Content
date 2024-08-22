import { useState } from "react";

const Child = ({info}) => {
    const [displayInfo , setDisplayInfo] = useState({
        name: 'Not set yet',
        age: 'Not set yet',
        city: 'Not set yet',
        occupation: 'Not set yet'
    });

    // const [name , setName] = useState('Not set yet');
    // const [age , setAge] = useState('Not set yet');
    // const [city , setCity] = useState('Not set yet');
    // const [occupation , setOccupation] = useState('Not set yet');

    const handleSubmission = async() => {

        try {
            
            const url = 'http://localhost:3000'

            const response = await fetch(url+`/create`,
            {
                method: 'POST',
                headers:{ 'Content-Type': 'application/json' },
                body: JSON.stringify({name: info.name})
            });

            if(response.ok){
                
                setDisplayInfo({
                    name: info.name,
                    age: info.age,
                    city: info.city,
                    occupation: info.occupation
                });

                // setName(info.name)
                // setAge(info.age)
                // setCity(info.city)
                // setOccupation(info.occupation)

            }
        } catch (err) {
            console.log(err)
        }

    }

return(
    <>
    <button onClick={handleSubmission}>(Child) - Click Me</button>
    <p>Name: {displayInfo.name}</p>
    <p>Age: {displayInfo.age}</p>
    <p>City: {displayInfo.city}</p>
    <p>Occupation: {displayInfo.occupation}</p>
    </>
);

}

export default Child;