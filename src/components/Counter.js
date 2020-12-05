/*****************************************

Ce composant affiche un compteur qui s'incrémente à  l'aide d'un bouton
et d'un input qui sert à préciser le pas. Le compteur est réinitialisé quand le pas change.

*****************************************/

import React from 'react';

const Counter = function(props) {
    // Déclaration des states
    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(1);

    // Fonction appelée lorsque l'utilisateur clique sur le bouton
    // Sert à incrémenter count.
    const handleClick = (e) => {
        e.preventDefault();
        setCount(count => count + step);
    }

    // Fonction appelée lorsque l'utlisateur modifie l'input number.
    // Sert à changer le pas de l'incrémentation ; vide aussi le compteur.
    const handleChange = (e) => {
        setStep(step => parseInt(e.target.value));
        
        setCount(count => 0);
    }

    return (<div className="container">
        <h2 className="mx-auto p-2">
            {count} 
        </h2>
        
        <div className="form-group-row my-4 bg-light">
            <label for="input-step">Changer le pas</label>
            <input id="input-step" className="form-control w-25 mx-auto" onChange={handleChange} type="number" value={step}/>
        </div>

        <button
            className="btn btn-primary"
            onClick={handleClick}
        >Incrémenter le compteur</button>
    </div>)
}

export default Counter;