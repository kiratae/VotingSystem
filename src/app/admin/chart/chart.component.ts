import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  clusterScoreData = [];

  clusterData = [];

  clusterCategories = [];

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'Prompt',
        fontSize: '24px'
      }
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
          text: 'คะแนน'
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
      data: this.clusterScoreData
    }]
  };

  nowTime: string;
  nowDate: string;

  constructor(
    private router: Router,
    private scoreService: ScoreService,
    private clusterService: ClusterService,
    private appSettings: AppSettingsServiceService
  ) { }

  ngOnInit() {

    if (sessionStorage.getItem('us_id') != null && sessionStorage.getItem('user_type') !== 'Admin') {
      this.router.navigate(['login']);
    }

    this.clusterService.getAll().subscribe(
      res => {
        console.log(res.data);
        this.clusterData = res.data;
      },
      error => console.log(error)
    );

    this.scoreService.getScore().subscribe(
      res => {
        const data = res.data;
        this.clusterCategories = [];

        data.forEach(element => {
          this.clusterCategories.push(element.ct_name_th);
          this.clusterScoreData.push({ y: element.sc_score, color: element.ct_color_code });
        });

        this.chartOptions = {
          chart: {
            type: 'column',
            style: {
              fontFamily: 'Prompt',
              fontSize: '24px'
            }
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
                text: 'คะแนน'
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
            data: this.clusterScoreData
          }]
        };

        this.updateScore();
      },
      error => console.log(error)

    );

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

  updateScore() {
    this.scoreService.getScore().subscribe(
      res => {
        const data = res.data;
        console.log(data);

        this.clusterScoreData = [];
        this.clusterCategories = [];

        data.forEach(element => {
          this.clusterCategories.push(element.ct_name_th);
          this.clusterScoreData.push({ y: element.sc_score, color: element.ct_color_code });
        });

        this.chartOptions = {
          chart: {
            type: 'column',
            style: {
              fontFamily: 'Prompt',
              fontSize: '22px'
            }
          },
          title: {
            text: 'OSSD#8',
            style: {
              fontFamily: 'Prompt',
              fontSize: '35px',
              fontWeight: '600'
            }
          },
          yAxis: {
            min: 0,
            title: {
                text: 'คะแนน'
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
                  format: '{point.y}',
                  style: {
                    fontFamily: 'Prompt',
                    fontSize: '24px'
                  }
              }
            }
          },
          series: [{
            data: this.clusterScoreData
          }]
        };

        setTimeout(() => {
          this.updateScore();
        }, this.appSettings.chartRefreshTime);
      },
      error => console.log(error)
    );

  }

  // tslint:disable-next-line: variable-name
  findCluster(ct_id: any) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.clusterData.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.clusterData[i].ct_id == ct_id) {
        return this.clusterData[i];
      }
    }
  }

}
