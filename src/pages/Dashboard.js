import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import Layouts from '../components/Layouts';
const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
      width: '100%', // Set width to 100%
    },
    xaxis: {
      categories: [
        'Baltimore',
        'Barcelona',
        'CapeTown',
        'Durban',
        'Felixstowe',
        'Leixoes',
        'Lisbon',
        'Valencia',
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [10, 50, 2, 35, 2, 125, 89, 10],
    },
  ]);

  const [chartData, setChartData] = useState({
    series: [7.5, 34.9, 15.1, 42.5, 7.5],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },

      labels: ['Completed', 'In process', 'Advanced', 'Canceled', 'Dispute'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const [chartDataCountry, setChartDataCountry] = useState({
    series: [6.2, 89.0, 4.8],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },

      labels: ['USA BOOKINGS', 'EU BOOKINGS', 'Other'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const [seriesBar, setSeriesBar] = useState([
    {
      name: 'COMPLETED',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'IN PROGRESS',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'ADVANCED',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ]);

  const [optionsBar, setOptionsBar] = useState({
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  });

  return (
    <Layouts>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard </li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section classname="content">
          <div classname="container-fluid">
            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <div className="qtitle">
                    <h5 className="card-title">Quick Form to</h5>
                    <br></br>
                    <h3>Request a Booking</h3>
                  </div>

                  <img
                    height={150}
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShT2D06wRkNBnrLaQOAfQZ7hL3qPPNEYfodSEUFZbwGyn8TbZPDxkwVCqVydsgHF98TRo&usqp=CAU"
                    className="card-img-top mx-auto d-block"
                    alt="Image"
                  />
                  <div className="card-body">
                    {/* Add your form elements or any other content here */}
                    <button type="button" className="btn btn-primary btn-block">
                      Request Booking
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <h3 className="card-title">Total Booking</h3>
                <Chart
                  options={chartData.options}
                  series={chartData.series}
                  type="pie"
                  width={380}
                />
              </div>
              <div className="col-sm">
                <h3 className="card-title">Total Countries</h3>
                <Chart
                  options={chartDataCountry.options}
                  series={chartDataCountry.series}
                  type="pie"
                  // width={380}
                />
              </div>
            </div>
          </div>
        </section>
        <hr />

        <section className="content">
          <div className="container-fluid"></div>

          <div className="ctitle">
            <h3 className="card-title">
              <i className="fas fa-file mr-1" />
              CONTAINERS BY POL
            </h3>
          </div>

          <Chart
            options={options}
            series={series}
            type="bar"
            // width={500}
            height={320}
          />

          <hr />

          <div className="ctitle">
            <h3 className="card-title">
              <i className="fas fa-file mr-1" />
              Annual Report
            </h3>
          </div>

          <Chart
            options={optionsBar}
            series={seriesBar}
            type="bar"
            height={320}
          />

          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </Layouts>
  );
};

export default Dashboard;
