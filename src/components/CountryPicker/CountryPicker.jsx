import React, {Component, useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
//importing styles css
import styles from './CountryPicker.module.css';
//importing filess
import { fetchCountries } from '../../api/index.js';


const CountryPicker = ({ handleCountryChange })=>{
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(()=>{
    const fetchAPI = async()=>{
      setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]);
  //console.log(fetchedCountries);
  return(
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country,i)=>(
          <option key={i} value={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
