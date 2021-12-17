import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import InfoWindow from './InfoWindow';

const useStyles = makeStyles((theme) => ({
  marker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    opacity: 0.5,

    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '100%',
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
    '&:hover ': {
      zIndex: 1,
    },
  },
}));

const Marker = (props) => {
  const classes = useStyles();
  const { color, name, id, state } = props;
  const [infoWindowOpen, setInfoWindowOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
    const handleHover = (event) => {
    //handle hover over Marker to show InfoWindow
    setAnchorEl(event.currentTarget);
    setInfoWindowOpen(true);
  };

    const handleClose = () => {
    //handle close of info window
    setInfoWindowOpen(false);
    setAnchorEl(null);
  };
  return (
    <div
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={() => handleClose()}
      className={classes.marker}
      style={{
        backgroundColor: color,
        cursor: 'pointer',
        height: state?.actuals.cases / 40000,
        width: state?.actuals.cases / 40000,
      }}
          //divide cases by 40000 to get heigh & width of marker
      title={name}
    >
      {infoWindowOpen && (
        <InfoWindow
          state={state}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Marker;
