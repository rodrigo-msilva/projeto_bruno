import React, {useState} from "react";
import { darkBlue, lightGray, primaryGreen, secondGreen } from "../../../config/colors";
import { ChartContainer } from "./styled";
import  Chart  from 'react-apexcharts'

const data = {
          
    series: [{
      name: 'User 1',
      data: [203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432]
    }, {
      name: 'User 2',
      data: [203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432]
    }, {
      name: 'User 3',
      data: [203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432]
    }, {
      name: 'User 4',
      data: [203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432]
    }, {
      name: 'User 5',
      data: [203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432, 231,203, 500, 421, 317, 212, 432]
    }],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          vertical: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Logons no mês'
      },
      xaxis: {
        categories: ['01/03/2022', '01/03/2022', '01/03/2022', '01/03/2022', '01/03/2022', '01/03/2022', '01/03/2022','01/03/2022','01/03/2022','01/03/2022'
    ,'01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022','01/03/2022'],
        labels: {
          formatter: function (val) {
            return val
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  };

const data_h = {
          
    series: [{
      name: 'User 1',
      data: [12, 3, 1, 15, 34, 22, 11,44, 111, 4, 11]
    }, {
      name: 'User 2',
      data: [12, 3, 1, 15, 34, 22, 11,44, 111, 4, 11]
    }, {
      name: 'User 3',
      data: [12, 3, 1, 15, 34, 22, 11,44, 111, 4, 11]
    }, {
      name: 'User 4',
      data: [12, 3, 1, 15, 34, 22, 11,44, 111, 4, 11]
    }, {
      name: 'User 5',
      data: [12, 3, 1, 15, 34, 22, 11,44, 111, 4, 11]
    }],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
      },
      toolbar: {
        show: false,
      },
      plotOptions: {
        bar: {
          vertical: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Logons por hora'
      },
      theme: {
        palette: 'palette6' // testar palette3, pallette 4, .... 10
      },
      xaxis: {
        categories: [0,1,2,3,4,5,6,7,8,9,10],
        labels: {
          formatter: function (val) {
            return val + 'h'          
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  };


export default function BarChart({status}) {
  
  return (    
        <ChartContainer>
            {
              status ? <Chart options={data.options} series={data.series} type="bar" height={450} width={880} />
              : <Chart options={data_h.options} series={data_h.series} type="bar" height={450} width={880} />  
            }
        </ChartContainer>
    )
}

