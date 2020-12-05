/*****************************************

Ce composant permet de gérer la partie recherche de pays.
La recherche se fait dans un select, lorsque la valeur de ce dernier change
le composant appelle la fonction handleChange qui utilise la fonction
onCountryInput (passée en propriété)afin de changer un état du parent.

*****************************************/

import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
    // contient les pays renvoyés par l'API
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all?fields=name'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCountries(data)
        });
    }, []);
    
    // Fonction permettant de changer le state "country" du
    // composant parent à l'aide de la fonction passée en props
    const handleChange = (e) => {
        console.log(e.target.value);
        props.onCountryInput(e.target.value);
    }

    return(<div>
        <select onChange={handleChange}>
            <option value=''>-----</option>
            {/* Pour créer plusieurs éléments du DOM à partir d'un tableau,
                on utilise la fonction map. forEach ne marche pas pour une raison qui m'échappe.
            */}
            {countries.map((country, key) => {
                return <option key={key} value={country.name} > {country.name} </option>  
            })}
        </select>
    </div>)
}

export default SearchBar;