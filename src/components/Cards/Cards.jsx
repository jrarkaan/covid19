import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// importing style
import styles from './Card.module.css';

const Cards = ({ data })=>{
  return(
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </Grid>
        <Grid item component={Card}>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of recoveries from COVID-19</Typography>
        </Grid>
        <Grid item component={Card}>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">REAL DATA</Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
