import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ForecastGraph = ({ temperatureData }) => {
  return (
    <>
      <h3>Temperature forecast for the next 5 days</h3>
      <ResponsiveContainer width='100%' height='100%' aspect={5.0 / 2.0}>
        <LineChart
          data={temperatureData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='averageTemp'
            stroke='#ffc107'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ForecastGraph;
