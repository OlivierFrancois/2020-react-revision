/*****************************************

Pareil que le composant Country, mais en utilisant les react-router.
Le nom du pays à recherché est donc passé dans l'URL, et est récupéré
grâce à props.match.params.name

*****************************************/

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const CountryRouter = (props) => {
    // Récupération du nom du country
    const name = props.match.params.name;

    // State contenant l'objet country retourné par l'API
    const [country, setCountry] = useState({});

    // A chaque fois que le composant est monté,
    // On fait une requête pour avoir les infos du pays selectionné
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/name/' + name;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCountry(data[0]);
        })
    }, []);

    return (<div>
        <h3>Bienvenue en {country.name} !</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Capitale</th>
                    <th>Population</th>
                    <th>Surface</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{country.capital}</td>
                    <td>{country.population}</td>
                    <td>{country.area}</td>
                </tr>
            </tbody>
        </table>

        {/* Vidage de l'URL pour retourné à la selection des pays. */}
        <p><Link to='/'>Retour</Link></p>
    </div>)
};

export default CountryRouter;