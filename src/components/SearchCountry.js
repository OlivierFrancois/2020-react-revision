/*****************************************

Ce composant contient deux composants : SearchBar et Country.
Le but de tout ces composants est d'afficher les
informations d'un pays en fonction d'un select.

*****************************************/

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Country from './Country';

const SearchCountry = (props) => {

    // Pays dont on veut afficher les informations
    const [country, setCountry] = useState('');

    // Fonction que l'on passe en props à SearchBar afin qu'il puisse
    // modifier l'état du pays dont on veut afficher les informations
    const handleCountryInput = (input) => {
        setCountry(input);
    }

    return (<div className="container">
        <SearchBar onCountryInput={handleCountryInput} />
        
        {/* Si un pays est selectionné, on l'affiche grâce au composant Country */}
        {country !== '' ? <Country name={country} /> : <p>Pas de pays selectionné</p>}
    </div>)
}



export default SearchCountry;