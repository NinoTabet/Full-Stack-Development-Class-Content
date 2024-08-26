import { useState } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';

const Login = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div>
      <Example1 isLoggedIn={isLoggedIn}/>
      <Example2 isLoggedIn={isLoggedIn}/>
      <button className='btn btn-primary' onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Login;