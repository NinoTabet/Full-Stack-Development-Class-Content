import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Estif');
    const [age, setAge] = useState (25);

    const handleClick = () =>{
        // name = 'Samuel';
        setName('Samuel');
        setAge(30);
    }

    return(
        <div>
            <h2>Homepage</h2>
            <p>Hi. My name is { name } and I am { age } years old.</p>
            <button onClick={handleClick}>click me</button>
        </div>
    )

}

export default Home;