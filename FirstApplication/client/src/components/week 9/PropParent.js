import { useState } from 'react';
import PropChild from './PropChild';
import { useNavigate } from 'react-router-dom';

const PropParent = () => {
    const navigate = useNavigate(); // Use useNavigate hook to access the navigate function
    const [samson, setSamson] = useState(0);

    const handleClick = () => {
        // setSamson(samson+1);
    }

    return(
        <div>
            <button onClick={() => navigate('/')}>
                click me!
            </button>
            {/* <PropChild number={samson}/> */}
        </div>
    );

}

export default PropParent;