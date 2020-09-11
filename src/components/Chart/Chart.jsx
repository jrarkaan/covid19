import React, { useState, useEffect } from 'react';
// importing file
import { fetchDailyData } from '../../api/index.js';
import { Line, Bar } from 'react-chartjs-2';
//importing styles
import styles from './Chart.module.css';

const Chart = ({data, country})=>{
  const [dailyData, setDailyDate] = useState({});
  useEffect(()=>{
    const fetchApi = async()=>{
      setDailyDate(await fetchDailyData());
    }
    fetchApi();
  },[]);

  const lineChart = (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            }],
          }}
        />
    ) : null
  );
  console.log(data.confirmed, data.recovered, data.deaths);
  const barChart = (
    data.confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor:[
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
          }}
          options={{
            legend: {display: false},
            title: {display: true, text:`Current state in ${country}`},
          }}

        />
      ) : null
  )

  return(
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
}

export default Chart;
