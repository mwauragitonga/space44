import { Divider, Paper, Popover, Typography } from '@material-ui/core';
import { statesWithCoordinates } from '../utils/statesWithCoordinates';
import { thousandSeparator } from '../utils/thousandSeparator';

// InfoWindow component
const InfoWindow = (props) => {
  const { state, anchorEl, handleClose } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 120,
    padding: 10,
    fontSize: 12,
    zIndex: 100,
  };
 const stateName = statesWithCoordinates.find(
   (y) => y.abbr === state.state
 )?.name;
  return (
    <Popover
      open={true}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      
      <div style={{ padding: 20, width: 200 }}>
        <Typography variant="subtitle1"> {stateName}</Typography>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
        
          <Typography variant="overline"> Population</Typography>
          <Typography variant="overline">
            {thousandSeparator(state.population)}
          </Typography>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="overline"> Cases </Typography>
          <Typography variant="overline">
            {thousandSeparator(state.actuals.cases)}
          </Typography>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="overline"> Deaths </Typography>

          <Typography variant="overline">
            {thousandSeparator(state.actuals.deaths)}
          </Typography>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="overline"> Positive Tests </Typography>

          <Typography variant="overline">
            {thousandSeparator(state.actuals.positiveTests)}
          </Typography>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="overline"> Negative Tests </Typography>

          <Typography variant="overline">
            {thousandSeparator(state.actuals.negativeTests)}
          </Typography>
        </div>
      </div>
    </Popover>
  );
};

export default InfoWindow;
