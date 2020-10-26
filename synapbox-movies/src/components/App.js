/**
* @author AlejoFlorez0
* Archivo Principl para manejo de rutas
* Mantendra las posibles rutas de la aplicación organizadas.
* Gestionará le archivo principal de la aplicación
* Gestionará rutas no existentes con un mensaje
*/

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from './NotFound';

function App (props) {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App