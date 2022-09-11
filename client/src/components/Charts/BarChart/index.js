import React, {useState, useEffect} from "react";
import { darkBlue, primaryGreen } from "../../../config/colors";
import { ChartContainer, ContainerLoad } from "./styled";

import { IoIosRefresh } from 'react-icons/io'
import  Chart  from 'react-apexcharts'

import api from "../../../services/api";

import Loading from '../../IsLoading'
import { RotatingLines } from 'react-loader-spinner'
  

export default function BarChart({status="other"}) {
  const data_atual = new Date()
  const mes = data_atual.getMonth()
  const [users, setUsers] = useState([])
  const [dates,setDates] = useState([])
  const [value, setValue] = useState(0)
  const [series, setSeries] = useState([])
  const [data, setData] = useState({})
  const [dadosHoje, setHoje] = useState({})
  const [quantidadeH, setQuantidadeH] = useState([])
  const [usersH, setUsersH] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [month,setMonth] = useState(mes + 1)
  


  useEffect(()=> {
    
    setIsLoading(true)
    function pegaData() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + '-' + dd;

      return today
    }

    function formatData(data) {
      let [ano,mes,dia] = data.split('-')
      
      const result = [dia,mes,ano].join('/')
      return result
    }
    
    
    const main = async () => {

    
    await api.get(`/home/dates/${month}`).then(async response => {
      let listD = []
      let obj = response.data
      await obj.map(o => {
        listD.push(o.data)
        
      })
      setDates(listD)
  })

  await api.get('/home').then(response => {
    let listU = []
    let objU = response.data
    objU.map(u => {
      listU.push(u.USUARIO)
    }) 
    setUsers(listU)
    
  })
  let series_ = []
    users.map( user => {
     api.get(`/home/${user}/${month}`).then(async response => {
        
        let obj = response.data
        let quantidade = []
        let qtd_crua = []
        let listDates = dates
        let datas_tabela = []
        obj.map((qtd,index) => {
          datas_tabela.push(qtd.data)
          qtd_crua.push(qtd.quantidade)
        })

      
        let count = 0   
        listDates.forEach((dt) => {
          if(datas_tabela.includes(dt)){
            quantidade.push(qtd_crua[count])
            
            count++ 
          } else {
            quantidade.push(0)
          }  

      })
      
      let final = {
        name: user,
        data: quantidade
      }
      series_.push(final)      
      })
      
    })

    setSeries(series_)
    
    setData({  
      series: series_,
      options: {
      chart: {
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      },
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
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
        categories: dates.map(dt => formatData(dt)),
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
      
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    }}
    )

    await api.get('/home/find/today').then(response => {
      
      let hoje = pegaData()
      let objD = response.data
      let users_ = []
      let quantidade_ = []
      objD.map(item => {
      if(item.data == hoje){
        users_.push(item.USUARIO)
        quantidade_.push(item.quantidade)
      }})
      setUsersH(users_)
      setQuantidadeH(quantidade_)
      console.log("users: ",users_)
      setHoje({
        series: [{
          data: quantidadeH
        }],
        options: {
          colors: [darkBlue, '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
          chart: {
            fontFamily: 'Fredoka',
            type: 'bar',
            height: 350,
            responsive: true
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          title: {
            text: 'Logons no dia'
          },
          dataLabels: {
            enabled: true,

          },
          xaxis: {
            categories: usersH,
          },
         

          
        },
      
      })
      

    })

    if (series_.length > 0 && series_.length >= users.length){
      console.log(series_)
      console.log(users)
      setIsLoading(false)
    } else {
      setValue(value + 1)
    }
  }
  main()
  },[value])
  
  
  if (isLoading) {
    return (<ContainerLoad><RotatingLines className="loading-spinner" width="50" strokeColor={darkBlue} /></ContainerLoad>)
  }
  return (
        <>
        { status === "date" ? <></>
        :null}
        <ChartContainer>
            { 
              status === "date" ? <Chart options={data.options} series={data.series} type="bar" height={450} width={880} />
              : <Chart options={dadosHoje.options} series={dadosHoje.series} type="bar" height={450} width={880}/>
            }
            
        </ChartContainer>
            
        </>
    )
}