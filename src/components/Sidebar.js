import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Tooltip,
} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import { statesWithCoordinates } from '../utils/statesWithCoordinates';
import { thousandSeparator } from '../utils/thousandSeparator';

class Sidebar extends React.Component {
  render() {
    const {
      statesData,
      handleSearchInput,
      filteredSidebarData,
      clearFilters,
      searchValue,
    } = this.props;
    const data =
      filteredSidebarData?.length === 0 ? statesData : filteredSidebarData;
    return (
      <div style={{ padding: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            style={{ width: '100%' }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchValue}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
          <Tooltip title="Clear filters" placement="right">
            <IconButton onClick={() => clearFilters()}>
              <DeleteForeverIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </div>
        <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
          <List>
            {data?.map((x) => {
              //get name of states from statesWithCoordinates array
              const name = statesWithCoordinates.find(
                (y) => y.abbr === x.state
              )?.name;
              return (
                <ListItem button key={x.fips}>
                  <ListItemText primary={name} />
                  <ListItemSecondaryAction>
                    {thousandSeparator(x.actuals.cases)}
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default Sidebar;
