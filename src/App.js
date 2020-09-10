import React from 'react';
// importing files
import { Cards, Chart, CountryPicker } from './components';
// importing file css
import styles from './App.module.css';

const App = ()=>{
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
