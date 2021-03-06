import React, { Component } from 'react';
// importing files
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api/index';
// importing file css
import styles from './App.module.css';
//import image
import coronaImage from './images/image.png';

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
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} atl="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
