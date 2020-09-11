import React, { Component } from 'react';
// importing files
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/index';
// importing file css
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async(country)=>{
    console.log(country);
    // fetch the data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    // set the state
    this.setState({
      data: fetchedData,
      country: country
    });
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
  }
  render(){
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
