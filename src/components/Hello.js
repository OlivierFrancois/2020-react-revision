/*****************************************

Ce composant sert à tester le passage de props avec une route.

*****************************************/

import React from 'react';

const Hello = (props) => {
    const name = props.match.params.name;

    return <div>
        Hello {name}
    </div>
}

export default Hello;