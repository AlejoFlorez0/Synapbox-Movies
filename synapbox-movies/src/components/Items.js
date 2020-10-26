/**
* @author AlejoFlorez0
* Componente Funcional para gestionar la petición y respuesta de la API
* Desde acá se cargan todos los items de la API, se obtienen y se crea 
* una carta por cada item, se envia las propiedades, se gestiona el estilo 
* y espaciado de cada componente, el filtro, la iteación y demás funcionalodades
* => Estilos del contenedor de las cartas
* => Información enviada hacía las cartas
* => Obtener información de la API
* => Mensaje de carga, error.
*/

import React from 'react';

import Grid from '@material-ui/core/Grid';
import { gql, useQuery } from '@apollo/client';

import ImgMediaCard from './card/ImgMediaCard';

function Items(props)
{
	const { loading, error, data } = useQuery(gql`
		{
			items
			{
				id, title, description, largeImage,price
			}
		}`);

	 if (loading) return <h2>Cargando...</h2>;
  	 if (error) return <p>Error :(</p>;

	return data.items.filter(objFil => objFil.title.toString().toLowerCase().includes(props.search.toString().toLowerCase())).map((item) =>
	{
		return(
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<ImgMediaCard
					key={item.id}
					title={item.title}
					description={item.description}
					image = {item.largeImage}
					price ={item.price} />
			</Grid>
		)
	})

}

export default Items