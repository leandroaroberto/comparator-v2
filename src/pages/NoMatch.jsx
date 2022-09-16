import React from 'react'
import { Link } from "react-router-dom";
import { StyledNoMatch } from '../global.styled';

const NoMatch = () => {
    return (        
        <StyledNoMatch>
            <p>
                <Link className="link" to="/">There's nothing here. Come back to the home page and try again.</Link>
            </p>
            <img src='404.jpg' />
        </StyledNoMatch>
    )
}
export default NoMatch;
