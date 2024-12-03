import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PopulationGraph = ({ populationCounts }) => {
  const years = populationCounts.map(p => p.year);
  const populations = populationCounts.map(p => p.value);

  const options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      color: 'white',
      height: 700,
    },
    title: {
      text: 'Population Over Time',
      style: {
        color: 'black',
      },
    },
    xAxis: {
      categories: years,
      title: {
        text: 'Years',
        style: {
          color: 'black',
        },
      },
      labels: {
        text: "Years",
        style: {
          fontSize: '1.2em',
          color: "black"
        },
      },
      lineColor: 'white',
      tickColor: 'white',
    },
    yAxis: {
      title: {
        text: 'Population',
        style: {
          color: 'black',
        },
      },
      labels: {
        style: {
          fontSize: '1.2em',
        },
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '',
      backgroundColor: '#DEEFF5',
    },
    series: [
      {
        name: 'Population',
        data: populations,
        color: Highcharts.getOptions().colors[0],
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0],
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PopulationGraph;
