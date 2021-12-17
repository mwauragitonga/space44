import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import React from 'react';
import { thousandSeparator } from '../utils/thousandSeparator';
import { statesWithCoordinates } from '../utils/statesWithCoordinates';

const useStyles = () => ({
    //style for the summary section
  summary: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paperStyles: { padding: 20, display: 'flex', flexDirection: 'column' },
});

class Summary extends React.Component {
  render() {
    const { summary, statesData, classes,} = this.props;

      //get name of states from statesWithCoordinates
    const stateName = statesWithCoordinates.find(
      (y) => y.abbr === summary.state
    )?.name;

      //switch between country & state name based on data currently being displayed
    const name = summary?.state === null ? summary?.country : stateName;
    return (
      <div>
        <Paper variant="outlined" style={{ padding: 32 }}>
          <div className={classes.summary}>
            <Typography variant="h5">{name}</Typography>
          </div>

          <Grid container spacing={1} style={{ marginTop: 32 }}>
            <Grid item xs={12} sm={2}>
              <Paper variant="outlined" className={classes.paperStyles}>
                <Typography variant="button" color="textSecondary">
                  Population
                </Typography>
                <Typography variant="h6">
                  {thousandSeparator(summary?.population)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper variant="outlined" className={classes.paperStyles}>
                <Typography variant="button" color="textSecondary">
                  Total Cases
                </Typography>
                <Typography variant="h6" style={{ color: '#88E0EF' }}>
                  {thousandSeparator(summary.actuals?.cases)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper variant="outlined" className={classes.paperStyles}>
                <Typography variant="button" color="textSecondary">
                  Positive Cases
                </Typography>
                <Typography variant="h6" style={{ color: '#FF8E00' }}>
                  {thousandSeparator(summary.actuals?.positiveTests)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper variant="outlined" className={classes.paperStyles}>
                <Typography variant="button" color="textSecondary">
                  Negative Tests
                </Typography>
                <Typography variant="h6" style={{ color: '#4E9F3D' }}>
                  {thousandSeparator(summary.actuals?.negativeTests)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper variant="outlined" className={classes.paperStyles}>
                <Typography variant="button" color="textSecondary">
                  Deaths
                </Typography>
                <Typography variant="h6" style={{ color: '#FF1700' }}>
                  {thousandSeparator(summary.actuals?.deaths)}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Summary);
