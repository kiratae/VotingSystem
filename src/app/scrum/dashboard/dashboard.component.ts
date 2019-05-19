import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clusterData = [];
  isDashboard = true;
  boardName = "Dashboard"

  rootPath;

  rank = [ '🥇', '🥈', '🥉', '', '', '', '', '', '', '😭' ]

  imgURL;

  constructor(
    private router: Router,
    private logService: LogService,
    private clusterService: ClusterService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.rootPath = this.router.url;
    this.imgURL = this.appSetting.apiURL+'/images/cluster/';
    this.fetch_dashboard()

    console.log(location.origin)
  }

  sync(){
    if(this.isDashboard){
      this.fetch_dashboard()
    }else{
      this.fetch_leaderboard();
    }
  }

  fetch_ct(){
    this.clusterService.getAll().subscribe(
      res => {
        let data = res['data'];
        this.clusterService.getLeaderboard().subscribe(
          res => {
            this.clusterData = res['data'];

            this.clusterData.forEach((e, i) => {
              this.clusterData[i].rank = i
            });

            let new_data = []

            for(let i = 0; i < data.length; i++){
              for(let j = 0; j < this.clusterData.length; j++){
                if(data[i].ct_id == this.clusterData[j].ct_id){
                  new_data.push(this.clusterData[j])
                }
              }
            }

            this.clusterData = new_data
          }, err => console.log(err)
        );
      }, err => console.log(err)
    );
  }

  fetch_dashboard(){
    this.boardName = "Dashboard"
    this.isDashboard = true;
    this.fetch_ct();
  }

  fetch_leaderboard(){
    this.boardName = "Leaderboard"
    this.isDashboard = false;
    this.clusterService.getLeaderboard().subscribe(
      res => {
        this.clusterData = res['data'];

        this.clusterData.forEach((e, i) => {
          this.clusterData[i].rank = i
        });
        console.log(this.clusterData);
      }, err => console.log(err)
    );
  }

  numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

}
