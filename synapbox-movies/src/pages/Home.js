import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import Items from '../components/Items';
import AppBar from '../components/bar/AppBar';


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

const client = new ApolloClient(
{
	uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev',
	cache: new InMemoryCache()
});


class Home extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
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
    		...this.state.search,
    		search: e.target.value
    	});

    	return true;
    };

	render()
	{
		const { classes } = this.props;

		return(
			<ApolloProvider client={client}>
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
							<Items
								search={this.state.search}
							/>
					</Grid>
				</div>
			</ApolloProvider>
		)
	}
}

Home.propTypes =
{
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)