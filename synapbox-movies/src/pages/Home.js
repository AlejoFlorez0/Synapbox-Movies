import React from 'react';

import Grid from '@material-ui/core/Grid';

import AppBar from '../components/bar/AppBar';
import ImgMediaCard from '../components/card/ImgMediaCard';

import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';

const styles = theme => (
	{
		gridContainer:
		{
			width:'100%',
			padding: '3vw',
			paddingLeft: '4vw',
			paddingRight: '0vw'
		}
	});

class Home extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state =
		{
			dataTest:
			[
				{
					title: "Postobon",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 12000
				},
				{
					title: "Sello Rojo",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 8000
				},
				{
					title: "Colcafe",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 19000
				},
				{
					title: "Coca Cola",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 8200
				},
				{
					title: "Protex",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 8800
				},
				{
					title: "Rexona",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 8700
				},
				{
					title: "Coca Cola Dos Litros - Retornable",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 11900
				},
				{
					title: "Lorem Impsu Lorem Impsu",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 18900
				},
				{
					title: "Learn amaz calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 82900
				},
				{
					title: "street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 37000
				},
				{
					title: "Green Alejo - Sabor a fresa",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 37000
				},
				{
					title: "Learn amazing",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 43000
				},
				{
					title: "Street",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 23000
				},
				{
					title: "Calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 28000
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "https://epay.albany.edu/C21455_ustores/web/images/product-default-image.png",
					price: 22000
				}
			],
			search:''
		};
	}

	/**
    * Evento para cambio de contenido en el formulario
    * @autor AlejoFlorez0
    */
    handleChange = e =>
    {
    	this.setState(
    	{
    		search: e.target.value
    	});

    	return true;
    };

	render()
	{
		const { classes } = this.props;

		return(

			<div>
				<AppBar
					onChange={this.handleChange}
					search={this.state.search}
				/>

				<Grid
					container
					spacing={5}
					className={classes.gridContainer}
					justify="center">

					{
						this.state.dataTest.filter(objFil => objFil.title.toString().toLowerCase().includes(this.state.search.toString().toLowerCase())).map((obj) =>
						{
							return(
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<ImgMediaCard
										title={obj.title}
										description={obj.description}
										image = {obj.image}
										price ={obj.price} />
								</Grid>
							)
						})
					}

				</Grid>

			</div>
		)
	}
}

Home.propTypes =
{
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)