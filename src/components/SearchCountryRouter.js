/*****************************************

Ce composant contient deux composants : SearchBar et Country.
Le but de tout ces composants est d'afficher les
informations d'un pays en fonction d'un select.

*****************************************/

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchBarRouter from './SearchBarRouter.js';
import CountryRouter from './CountryRouter.js';

const SearchCountryRouter = (props) => {
    
    // Comme on utilise les router, pas besoin de states/fonction
    //pour gérer/modifier le pays à afficher.

    return(<div>
        <Switch>
            <Route path={'/country/:name'} component={CountryRouter}/>
            <Route component={SearchBarRouter}/>
        </Switch>
    </div>)
};

export default SearchCountryRouter;