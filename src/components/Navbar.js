import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker USA
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
