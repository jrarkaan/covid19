import React, {Component, useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
//importing styles css
import styles from './CountryPicker.module.css';

const CountryPicker = ()=>{
  return(
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
