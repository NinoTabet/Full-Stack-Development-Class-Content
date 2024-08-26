import React from 'react';
import { useState } from 'react';

function Header2() {

  const [name, setName] = useState('Company name')

  const handleClick = () => {
    if(name === 'Anthony'){
      setName('Company name');
    }else{
      setName('Anthony');
    }
  }

  return (
    <div className="vw-100 d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <div className="text-center w-50">
        <h2>{ name }</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button onClick={handleClick} className="btn btn-outline-primary rounded-pill">
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Header2;
