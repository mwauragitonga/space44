import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './App.css';
import Summary from './components/Summary';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Navbar from './components/Navbar';
import { statesWithCoordinates } from './utils/statesWithCoordinates';

const useStyles = makeStyles((theme) => ({}));


class App extends React.Component {
  state = {
    statesData: [],
    summary: {},
    value: '',
    filteredSidebarData: [],
    searchValue: '',
  };

  componentDidMount() {
        document.body.style.backgroundColor = '#ECF0F1';

    //make API calls to prepare data for the application
    this.getStatesData();
    this.getCountrySummaryData();
  }

  filterStatesData = (state) => {
    try {
      if (state.length > 1) {
        //if the user has entered more than one character, filter the states
        const stateAbbreviation = statesWithCoordinates.find(
          (y) => y.name.toLowerCase() === state.toLowerCase()
        )?.abbr;

        this.filterSidebarData(stateAbbreviation);

        const result = this.state.statesData?.find(
          (x) => x.state.toLowerCase() === stateAbbreviation.toLowerCase()
        );

        if (result) {
          this.setState({ summary: result });
        }
      } else {
        //less than 1 character entered, clear the filters( return to country summary)
        this.getCountrySummaryData();
      }
    } catch {}
  };
  getStatesData = () => {
    try {
      fetch(
        'https://api.covidactnow.org/v2/states.json?apiKey=25c1d546a6304ee6b86c238c7f74be8b'
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            statesData: data,
          });
        });
    } catch {}
  };
  getCountrySummaryData = () => {
    try {
      fetch(
        'https://api.covidactnow.org/v2/country/US.json?apiKey=25c1d546a6304ee6b86c238c7f74be8b'
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            summary: data,
          });
        });
    } catch {}
  };

  //filter the sidebar data based on the value entered in search bar
  filterSidebarData = (state) => {
    const data = this.state.statesData.filter((x) => x.state === state);
    this.setState({ filteredSidebarData: data });
  };

  //clear filters and return to country summary
  clearFilters = () => {
    this.getCountrySummaryData();
    this.setState({ filteredSidebarData: [], searchValue: '' });
  };

  //handle input change in search filter
  handleSearchInput = (value) => {
    this.setState({ searchValue: value });
    this.filterStatesData(value);
  };

  render() {
    const { statesData, summary, value, filteredSidebarData, searchValue } =
      this.state;

    const {
      filterStatesData,
      handleInputChange,
      clearFilters,
      handleSearchInput,
    } = this;
    return (
      <div className="App">
        <Navbar handleInputChange={handleInputChange} />
        <Grid container style={{ paddingLeft: 60, paddingRight: 60 }}>
          <Grid item xs={12} md={10}>
            <Summary
              summary={summary}
              statesData={statesData}
             
            />
            <Map
       
              statesData={statesData}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Sidebar
              clearFilters={clearFilters}
              filteredSidebarData={filteredSidebarData}
              statesData={statesData}
              handleSearchInput={handleSearchInput}
              searchValue={searchValue}
           
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
