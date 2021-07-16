import React from 'react';

const Card = (props) => {
    const {name, id, image} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 measure">
            <img src={image} alt="Pokemon image" />
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    );

}

export default Card;