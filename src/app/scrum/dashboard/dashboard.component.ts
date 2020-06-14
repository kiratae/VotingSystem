import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { EventService } from 'src/app/services/scrum/event.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  eventHistoryData = [];
  clusterData = [];
  isDashboard = true;
  boardName = 'Dashboard';
  selectedCluster: any;

  rootPath: string;

  rank = [ '🥇', '🥈', '🥉', '', '', '', '', '', '', '✌' ];

  imgURL: string;
  nowTime: string;
  nowDate: string;

  constructor(
    private router: Router,
    private logService: LogService,
    private clusterService: ClusterService,
    private eventService: EventService,
    private datepipe: DatePipe,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.rootPath = this.router.url;
    this.imgURL = this.appSetting.apiURL + '/images/cluster/';

    setInterval(() => {
      this.getTime();
      this.fetch_dashboard();
    }, 1000);

    // console.log(location.origin);
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

  sync() {
    this.getTime();
    if (this.isDashboard) {
      this.fetch_dashboard();
    } else {
      this.fetch_leaderboard();
    }
  }

  fetch_ct() {
    this.clusterService.getAll().subscribe(
      res => {
        const data = res.data;
        this.clusterService.getLeaderboard().subscribe(
          res => {
            this.clusterData = res.data;

            this.clusterData.forEach((e, i) => {
              this.clusterData[i].rank = i;
            });

            let new_data = [];

            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < this.clusterData.length; j++) {
                if (data[i].ct_id == this.clusterData[j].ct_id) {
                  new_data.push(this.clusterData[j]);
                }
              }
            }

            this.clusterData = new_data;
          }, err => console.log(err)
        );
      }, err => console.log(err)
    );
  }

  fetch_dashboard() {
    this.boardName = 'Dashboard';
    this.isDashboard = true;
    this.fetch_ct();
  }

  fetch_leaderboard() {
    this.boardName = 'Leaderboard';
    this.isDashboard = false;
    this.clusterService.getLeaderboard().subscribe(
      res => {
        this.clusterData = res.data;
        this.clusterData.forEach((e, i) => {
          this.clusterData[i].rank = i;
        });
        console.log(this.clusterData);
      }, err => console.log(err)
    );
  }

  viewHistory(index: string | number, ct_id: any) {
    this.selectedCluster = this.clusterData[index].ct_name_th;
    this.eventService.ct_id = ct_id;
    this.eventService.getHistory().subscribe(
      res => {
        this.eventHistoryData = res.data;
      }, err => console.log(err)
    );
  }

  convertDate(dateTime: string | number | Date) {
    const month = [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.' ];
    const date = new Date(dateTime);
    const toDayString = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm:ss', '+0700');
    const arr = toDayString.split(/[- :]/);
    // tslint:disable-next-line: max-line-length
    const thaiDate = arr[2] + ' ' + month[parseInt(arr[1])] + ' ' + (parseInt(arr[0]) + 543) + ' เวลา ' + arr[3] + ':' + arr[4] + ':' + arr[5] + ' น.';
    return thaiDate;
  }

  numberWithCommas(x: { toString: () => string; }) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
