import React from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles } from '@material-ui/core/styles';

const styles = theme =>(
  {
    root:
    {
      flexGrow: 1
    },
    title:
    {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]:
      {
        display: 'block'
      },
    },
    search:
    {
      position: 'relative',
      marginLeft: 0,
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover':
      {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      [theme.breakpoints.up('sm')]:
      {
        width: 'auto',
        marginLeft: theme.spacing(1)
      },
    },
    searchIcon:
    {
      position: 'absolute',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none',
      justifyContent: 'center',
      padding: theme.spacing(0, 2)
    },
    inputRoot:
    {
      color: 'inherit'
    },
    inputInput:
    {
      width: '100%',
      padding: theme.spacing(1, 1, 1, 0),
      transition: theme.transitions.create('width'),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      [theme.breakpoints.up('sm')]:
      {
        width: '30vw',
        '&:focus':
        {
          width: '35vw'
        }
      }
    }
  }
);

class SearchAppBar extends React.Component
{
  render()
  {
    const { classes, onChange, search } = this.props;

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          
            <Typography className={classes.title} variant="h6" noWrap>
              Synapbox - Movie
            </Typography>

            <div className={classes.search}>

              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Buscar"
                onChange={onChange}
                value={search}
                classes={
                {
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}/>

            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchAppBar.propTypes =
{
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar)
