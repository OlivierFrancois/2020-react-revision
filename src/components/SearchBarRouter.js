/*****************************************

Ce composant fonctionne un peu comme SearchBar, à la différence
que la recherche se fait avec un input text et que l'information
du pays selectionné est passé dans l'URL plutôt qu'avec une fonction props.

*****************************************/

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const SearchBarRouter = (props) => {
    // Pays que l'API renvoie
    const [countries, setCountries] = useState([]);

    // Pays de countries correspondants à l'input
    const [filteredCountries, setFilteredCountries] = useState([]);

    // Récupération des pays dans l'API
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all?fields=name';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCountries(data);
        })
    }, [])

    // Appelé lorsqu'il y a un changement dans l'input
    const handleChange = (e) => {

        // On récupère tous les countries correspondant à l'input
        setFilteredCountries(countries.filter(country => {
            if (country.name.indexOf(e.target.value) != -1)
                return country;
        }))

        //console.log(filteredCountries);
    }

    // style car je suis un super intégrateur
    const style = {
        maxHeight: '500px',
        overflow: 'scroll'
    }

    return (<div style={style} className="container bg-light">
        <input type="search" placeholder="Nom du pays..." onChange={handleChange}></input>
        
        {/* S'il y a des pays correspondants on les affiche sinon No Matching Country */}
        {(filteredCountries.length <= 0) ?
        <p>No matching country</p> :
        filteredCountries.map((country, key) => {
            if (country) 
                return <p key={key}><Link to={'/country/' + country.name}>{country.name}</Link></p>
        })}
    </div>)
};

export default SearchBarRouter;