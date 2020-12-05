import '../styles/App.css';
import {Clock} from './Clock.js';
import Counter from './Counter.js';
import SearchCountry from './SearchCountry.js';
import {Switch, Route, Link } from 'react-router-dom';
import Box from './Box.js';
import Hello from './Hello.js';
import HelloQS from './HelloQS.js';

import SearchCountryRouter from './SearchCountryRouter.js';

function App() {
  return (
	<div className="App">
		{/* Composant qui affiche la date du jour */}
		<Clock />

		<div className="my-5">________________________</div>

		{/* Composant qui affiche un compteur et un input number pour changer le pas du compteur */}
		<Counter />

		<div className="my-5">________________________</div>
		
		{/* Afficher les informations d'un pays selectionné à partir d'un select */}
		<SearchCountry />

		<div className="my-5">________________________</div>

		{/* Les link permettent de changer le chemin
			Les switch permettent de choisir une route
			Les routes permettent d'appeler un composant en fonction d'un chemin
		*/}
		<ul className="container">
			<li><Link to='/primary'>Affichage primary</Link></li>
			<li><Link to='/success'>Affichage success</Link></li>
			<li><Link to='/danger'>Affichage danger</Link></li>
		</ul>
		<Switch>
			{/* Le render sert à passer un composant avec des propriétés.
			Si on voulait passer un composant sans propriétés, on pourrait
			faire à la place : component={Box} */}
			<Route path='/primary' render={() => <Box color='primary'/>} />
			<Route path='/success' render={() => <Box color='success'/>} />
			<Route path='/danger' render={() => <Box color='danger'/>} />
		</Switch>

		<div className="my-5">________________________</div>
		
		{/* On peut aussi utiliser cette syntaxe pour passer des propriétés
			à un composant sans s'embêter du render={...}
		*/}
		<Link to='/hello/Steven'>/hello/Steven</Link>
		<Switch>
			<Route path='/hello/:name' component={Hello} />
		</Switch>

		<div className="my-5">________________________</div>

		{/* Le package queryString permet de récupérer les paramètres dans un chemin
			un peu comme un Get
		*/}
		<Link to='/helloQS?name=bobby'>/helloQS?name=bobby</Link>
		<Switch>
			<Route path='/helloQS' component={HelloQS} />
		</Switch>

		<div className="my-5">________________________</div>
			{/* Afficher une liste de pays correspondant à d'un input écrit
				Cliquer sur un pays permet d'afficher des informations sur ce dernier
				en utilisant les router
			*/}
			<SearchCountryRouter />

		<div className="my-5">________________________</div>
	</div>
  );
}

export default App;
