/*****************************************

Ce composant affiche ules informations d'un pays en faisant une requête
à l'API RestCountries, à partir du nom du pays passé en props.

*****************************************/

import React, { useEffect, useState } from 'react';

const Country = (props) => {
    // State contenant le pays affiché
    // (récupéré à partir d'une requête à partir du nom du pays)
    const [country, setCountry] = useState({})

    // Effectué quand le composant est monté. Appel à l'API.
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/name/' + props.name;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCountry(data[0]);
        })
    }, [props.name])

    return(<div>
        <h1>{country.name}</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Capitale</th>
                    <th>Domaine de premier niveau</th>
                    <th>Population</th>
                    <th>Surface</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{country.capital}</td>
                    <td>{/*country.topLevelDomain[0]*/}BUG</td>
                    <td>{country.population}</td>
                    <td>{country.area}</td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default Country;