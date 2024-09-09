import axios from 'axios';
import { useState } from 'react';

const AxiosRequests = () => {

    const [catFact, setCatFact] = useState('');

    const handleCatFact = async() => {

        try {
            // const response = await axios.get('https://catfact.ninja/facts');
            const response = await axios.get('https://api.genderize.io/',{
                params:{
                    name: 'Nino'
                },
                headers:{
                    Authorization: `bearer ${token}`
                }
            });

            const response1 = await axios.post(
            
            // 1st param - api url
            'https://yourfakeurlishere.com/',
            // 2nd param - body
            {
                title: 'hello',
                description: 'hellox2',   
            },
            // 3rd param - options
            {
                params:{
                    name: 'Nino'
                }
                ,
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            console.log(response.data);
            setCatFact(response.data.gender);
            
        } catch (err) {
            console.error(err);
        }

    }

    return(
    <>
        <div>
            <button onClick={handleCatFact}>Click Me</button>
            <h1>{catFact}</h1>
        </div>
    </>
    )
}
export default AxiosRequests;