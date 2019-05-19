import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  chart: {
    type: 'line',
    marginRight: 130
  },
  title: {
    text: 'OSSD#7',
    style: {
      fontFamily: "Prompt",
      fontSize: "40px",
      fontWeight: "600"
    }
  },
  time: {
    useUTC: false,
    timezoneOffset: 7 * 60
  },
  yAxis: {
    min: 0,
    title: {
        text: 'จำนวนเงิน (บาท)',
        style: {
          fontFamily: "Prompt",
          fontSize: "28px",
          fontWeight: "600"
        }
    },
    labels: {
      style: {
        fontFamily: "Prompt",
        fontSize: "24px"
      }
    }
  },
  xAxis: {
    title: {
      text: 'เวลา',
      style: {
        fontFamily: "Prompt",
        fontSize: "28px",
        fontWeight: "600"
      }
    },
    type: 'datetime',
    tickPixelInterval: 150,
    labels: {
      format: '{value: %H:%M}',
      style: {
        fontFamily: "Prompt",
        fontSize: "24px",
        fontWeight: "400"
      }
    },
  },
  legend:{
    enabled: true,
    itemStyle: {
      fontFamily: "Prompt",
      fontSize: "28px",
      fontWeight: "600"
    },
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  tooltip: {
    enabled: true,
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  plotOptions: {
    series: {
      lineWidth: 8,
      dataLabels: {
          enabled: false
      }
    }
  },
});

@Component({
  selector: 'app-money-chart',
  templateUrl: './money-chart.component.html',
  styleUrls: ['./money-chart.component.css']
})
export class MoneyChartComponent implements OnInit {

  minRate = 60;
  chartRefreshTime = 15 * 60 * 1000; // min.

  timeouter;

  clusterMoneyData: any = [];
  clusterData: any = [{name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
  {name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
  {name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
  {name:"",color:"",data:[]}];
  Highcharts = Highcharts;
  chartOptions = {
    series: [{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    },{
      name: "",
      data: [],
      color: ''
    }]
  };

  constructor(
    private logService: LogService,
    private clusterService: ClusterService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {

    this.getMoney();

  }

  getMoney(){

    this.chartRefreshTime = this.minRate * 60 * 1000;

    this.resetData();

    clearTimeout(this.timeouter)

    this.logService.time = this.chartRefreshTime / 1000;
    this.logService.getByRangeTime().subscribe(
      res => {
        let data = res['data'];
        // console.log(data);
        console.log("Synced!");
        
        data.forEach((e) => {
          if(!this.clusterData[e.ct_sequence].name){
            this.clusterData[e.ct_sequence].name = e.ct_name_th
          }
          if(!this.clusterData[e.ct_sequence].color){
            this.clusterData[e.ct_sequence].color = e.ct_color_code
          }
          this.clusterData[e.ct_sequence].data.push({ x: (new Date()).getTime() - e.Hour * this.chartRefreshTime ,y: e.total_money })
        })
        this.setChart();
        this.updateMoney();
      }, err => console.error(err)
    )
  }

  updateMoney(){

    this.logService.getByRangeTimeNow().subscribe(
      res => {
        let data = res['data'];
        
        data.forEach((e) => {
          if(!this.clusterData[e.ct_sequence].name){
            this.clusterData[e.ct_sequence].name = e.ct_name_th
          }
          if(!this.clusterData[e.ct_sequence].color){
            this.clusterData[e.ct_sequence].color = e.ct_color_code
          }
          this.clusterData[e.ct_sequence].data.push({ x: (new Date()).getTime() - e.Hour * this.chartRefreshTime ,y: e.total_money })

          console.log(e.ct_sequence, this.clusterData[e.ct_sequence].data.length);

          if(this.clusterData[e.ct_sequence].data.length > 50){
            this.clusterData[e.ct_sequence].data.splice(0, this.clusterData[e.ct_sequence].data.length - 50);
          }
        })

        
        this.setChart();

        this.timeouter = setTimeout(() => {
          this.updateMoney();
        }, this.chartRefreshTime);
      },
      error => console.log(error)
      
    );

  }

  resetData(){
    this.clusterData = [{name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
    {name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
    {name:"",color:"",data:[]},{name:"",color:"",data:[]},{name:"",color:"",data:[]},
    {name:"",color:"",data:[]}];
  }

  setChart(){
    this.chartOptions = {
      series: [{
        name: this.clusterData[0].name,
        data: this.clusterData[0].data,
        color: this.clusterData[0].color
      },
      {
        name: this.clusterData[1].name,
        data: this.clusterData[1].data,
        color: this.clusterData[1].color
      },
      {
        name: this.clusterData[2].name,
        data: this.clusterData[2].data,
        color: this.clusterData[2].color
      },
      {
        name: this.clusterData[3].name,
        data: this.clusterData[3].data,
        color: this.clusterData[3].color
      },
      {
        name: this.clusterData[4].name,
        data: this.clusterData[4].data,
        color: this.clusterData[4].color
      },
      {
        name: this.clusterData[5].name,
        data: this.clusterData[5].data,
        color: this.clusterData[5].color
      },
      {
        name: this.clusterData[6].name,
        data: this.clusterData[6].data,
        color: this.clusterData[6].color
      },
      {
        name: this.clusterData[7].name,
        data: this.clusterData[7].data,
        color: this.clusterData[7].color
      },
      {
        name: this.clusterData[8].name,
        data: this.clusterData[8].data,
        color: this.clusterData[8].color
      },
      {
        name: this.clusterData[9].name,
        data: this.clusterData[9].data,
        color: this.clusterData[9].color
      }]
    };
  }

}
