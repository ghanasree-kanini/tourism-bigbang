import React from 'react';
import {Link} from "react-router-dom";

function Button() {
    return (
        <Link to="Signup">
         <button className="btn">Signup</button>
        </Link>
    );
}
export default Button;