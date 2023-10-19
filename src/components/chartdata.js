import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import Showtable from './showtabel';
import chartdata from "../data/chartdata.json";
import{BiSolidDoughnutChart} from "react-icons/bi"
import{BsTable} from "react-icons/bs"
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Chartdata = () => {
  const chartRef = useRef(null);
  const [showChart, setShowChart] = useState(true);
  const [selectedOption, setSelectedOption] = useState("clicks");
  const tableheadings = chartdata.tableHeadings;
  const tabledata = chartdata.data;

  useEffect(() => {
    const data = {
      labels: tabledata.map((td) => td.groups), 
      datasets: [
        {
          data: tabledata.map((td) => td[selectedOption]),
          backgroundColor: ['#FF823C', '#0096FF', '#323C46'],
          borderColor: ['white'],
        },
      ],
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        cutout: '60%',
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
        },
        layout:{
          autopadding:true
        }
      },
    };

    if (showChart) {
      const myChart = new Chart(chartRef.current, config);
      return () => {
        myChart.destroy();
      };
    }
  }, [showChart, selectedOption]);

  const toggleDisplay = () => {
    setShowChart(!showChart);
  };
  const handleChartClick = () => {
    setShowChart(true);
  };

  const handleTableClick = () => {
    setShowChart(false);
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='chartcontainer-header'>
      <div className='chartcontainer'>
        <div className='chart-wrapper'>
          {showChart ? (
            <div className='charttab'>
              <div className='header-contaner'>
                <h2>Ads Insight</h2>
                <div className='dropdown-box'>
                <select name='adsgroups' id='adgroup' onChange={handleSelectChange}>
                  {tableheadings.map((th) =>
                    th !== 'groups' ? (
                      <option value={th} key={th}>
                        {th.toLocaleUpperCase()}
                      </option>
                    ) : (
                      ''
                    )
                  )}
                </select>
                <AiOutlineQuestionCircle className='questiontag'/>
                </div>
              </div>
         <div className='doughnut-chart-data'>
         <canvas className='chartmain' ref={chartRef} />
              <div className='mydata'>
              {showChart && (
              <div>
                {tabledata.map((td) => {
                const total = tabledata.reduce((acc, item) => acc + item[selectedOption], 0);
                const percentage = ((td[selectedOption] / total) * 100).toFixed(2);
                   return (
                       <div key={td.groups}>
                        
                         <strong className='percentage-data'>{percentage}% </strong>
                    
                      </div>
                  );
              })}
          </div>
  )}
</div>
         </div>
            </div>
          ) : (
            <Showtable TableData={chartdata} />
          )}
        </div>
      </div>
      <div className="toggle-buttons">
        <button className={`togglebtn ${showChart ? "active" : ""}`} onClick={handleChartClick}>
          <BiSolidDoughnutChart />
        </button>
        <button className={`togglebtn ${!showChart ? "active" : ""}`} onClick={handleTableClick}>
          <BsTable />
        </button>
      </div>
    </div>
  );
};

export default Chartdata;
