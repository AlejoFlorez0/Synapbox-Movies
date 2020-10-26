/**
* @author AlejoFlorez0
* Componente de carta para los items de pelicula
* En este componente se mostrará la información obtenida
* desde la API (Recibida en las Props) de un Item.
* Tanto los estilos como la estrcutr general de la carta se gestionan desde acá
* Es importante aclarar que tanto la funcionalidad de agregar al carrito
* como la funcionalidad de ver detalles no estan terminadas, aunque se trabajo en ellas
* no han sido terminadas, por lo tanto puede descartarlas
* => Estilos unicamente de la barra de busqueda
* => Estructura de l barra de busqueda
*/

import React from 'react';

import modalInfo from './modal/ModalInfo';

import Card from '@material-ui/core/Card';  
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class ImgMediaCard extends React.Component
{
  render()
  {
    const { title, description,image, price} = this.props;

    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" size="medium">
            Ver Detalles
          </Button>
          <IconButton
            color="primary"
            size="medium"
            aria-label="Agregar a carrito de compras">
              <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default ImgMediaCard