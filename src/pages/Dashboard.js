import React, { useState } from "react";
import Chart from "react-apexcharts";

import Layouts from "../components/Layouts";
const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);

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
                  <li className="breadcrumb-item active">Dashboard v1</li>
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
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-6 col-6">
                {/* small box */}

                <Chart
                  options={options}
                  series={series}
                  type="line"
                  width={500}
                  height={320}
                />
              </div>
              {/* ./col */}

              {/* ./col */}
              <div className="col-lg-6 col-6">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Annual Report
                </h3>
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  width={500}
                  height={320}
                />
              </div>
              {/* ./col */}

              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}

              {/* /.Left col */}

              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </Layouts>
  );
};

export default Dashboard;
