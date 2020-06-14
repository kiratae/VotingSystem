import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  },
  yAxis: {
    title: {
      style: {
        fontFamily: 'Prompt',
        fontSize: '24px',
        fontWeight: '600'
      }
    },
    labels: {
      style: {
        fontFamily: 'Prompt',
        fontSize: '36px',
        fontWeight: '600'
      }
    }
  }
})

@Component({
  selector: 'app-scrum-bar',
  templateUrl: './scrum-bar.component.html',
  styleUrls: ['./scrum-bar.component.css']
})

export class ScrumBarComponent implements OnInit {

  clusterMoneyData = [];
  clusterData = [];
  clusterCategories = [];
  rootPath;
  Highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'OSSD#8',
      style: {
        fontFamily: 'Prompt',
        fontSize: '40px',
        fontWeight: '600'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'จำนวนเงิน ($E)'
      },
      labels: {
        style: {
          fontFamily: 'Prompt',
          fontSize: '24px'
        }
      }
    },
    xAxis: {
      labels: {
        style: {
          fontFamily: 'Prompt',
          fontSize: '28px',
          fontWeight: '500'
        }
      },
      categories: this.clusterCategories
    },
    legend:{
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
            enabled: true,
            format: '{point.y:,.0f}',
            style: {
              fontFamily: 'Prompt',
              fontSize: '24px'
            }
        }
      }
    },
    series: [{
      data: this.clusterMoneyData
    }]
  };

  nowTime: string;
  nowDate: string;

  constructor(
    private router: Router,
    private logService: LogService,
    private clusterService: ClusterService,
    private appSettings: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.rootPath = this.router.url;
    this.fetch_leaderboard();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
      const nowDate = new Date();
      this.nowDate = this.dateToStringOutput(nowDate);
      this.nowTime = this.dateToTimeStringOutput(nowDate);
  }

  dateToTimeStringOutput(date: Date) {
    const s = date.getSeconds();
    const m =  date.getMinutes();
    const h =  date.getHours();
    return this.getZeroPrefix(h) + ' : ' + this.getZeroPrefix(m) + ' : ' + this.getZeroPrefix(s);
  }

  dateToStringOutput(date: Date) {
    const month = [ 'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม'
                    , 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม' ];
    const d = date.getDate();
    const m =  date.getMonth();
    const y =  date.getFullYear();

    return `${d} ${month[m]} พ.ศ. ${y + 543}`;
  }

  getZeroPrefix(time: number) {
    return (time < 10 ? '0' : '') + time;
  }

  fetch_leaderboard() {
    this.getTime();

    this.clusterService.getDashboard().subscribe(
      res => {

        const data = res.data;

        this.clusterCategories = [];
        this.clusterMoneyData = [];

        console.log(data);
        console.log('getDashboard');

        data.forEach(element => {
          this.clusterCategories.push(element.ct_name_th);
          this.clusterMoneyData.push({ y: element.total_money, color: element.ct_color_code });
        });

        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: `OOSD#8`,
            style: {
              fontFamily: 'Prompt',
              fontSize: '35px',
              fontWeight: '500'
            }
          },
          yAxis: {
            min: 0,
            title: {
                text: 'จำนวนเงิน ($E)',
            },
            labels: {
              style: {
                fontFamily: 'Prompt',
                fontSize: '20px'
              }
            }
          },
          xAxis: {
            labels: {
              style: {
                fontFamily: 'Prompt',
                fontSize: '24px',
                fontWeight: '500'
              }
            },
            categories: this.clusterCategories
          },
          legend: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          plotOptions: {
            series: {
              dataLabels: {
                  enabled: true,
                  format: '{point.y:,.0f}',
                  style: {
                    fontFamily: 'Prompt',
                    fontSize: '24px'
                  }
              }
            }
          },
          series: [{
            data: this.clusterMoneyData
          }]
        };

        console.log(this.clusterData);
      }, err => console.log(err)
    );
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
