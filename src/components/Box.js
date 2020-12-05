/*****************************************

Ce composant affiche simplement une div haute de deux lignes
et dont le background change en fonction d'une propriété color qui lui est passée.

*****************************************/

import React from 'react';

const Box = (props) => {
    const className = 'container bg-' + props.color;

    return(<div className={className}>
        <br />
        <br />
    </div>)
}

export default Box;