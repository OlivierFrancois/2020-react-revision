/*****************************************

Ce composant sert à tester une autre syntaxe pour passer des props dans des routes,
à l'aide du package QueryString

*****************************************/

import React from 'react';
import qs from 'query-string';

const HelloQS = (props) => {
    const queryParam = qs.parse(props.location.search);

    return (<div>
        Hello {queryParam.name}
    </div>)
}

export default HelloQS;