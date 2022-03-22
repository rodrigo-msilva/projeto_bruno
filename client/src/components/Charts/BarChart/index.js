import React from "react";
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
        text: 'Fiction Books Sales'
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



export default function BarChart() {
    return (
        <ChartContainer>
            <Chart options={data.options} series={data.series} type="bar" heght={350} />
        </ChartContainer>
    )
}

