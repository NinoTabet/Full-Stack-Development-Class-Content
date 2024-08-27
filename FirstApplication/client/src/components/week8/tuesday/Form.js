import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log('hello');

    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text'
                    id='name'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email'
                    id='email'
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;