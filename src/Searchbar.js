import React from 'react';
import 'tachyons';

const Searchbar = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
            className = "pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Gonna catch them all ..." 
            onChange= {searchChange}
            />

        </div>
    )
}

export default Searchbar;