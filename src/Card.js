import React from 'react';
import 'tachyons';

const Card = (props) => {
    const {name, id, image} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 measure card">
            <img src={image} alt="Pokemon" />
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    );

}

export default Card;