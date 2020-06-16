import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})

export class ScoreViewComponent implements OnInit {

  scoresData: Array<any>;
  imgURL: string;
  clustersData = [];
  voteText;

  constructor(
    private scoreService: ScoreService,
    private clusterService: ClusterService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.fetchCluster();
    this.fetchScore();
    this.imgURL = this.appSetting.apiURL + '/images/cluster/';
  }

  fetchScore() {
    this.scoreService.getScore().subscribe(
      res => {
        console.log(res.data);
        this.scoresData = res.data;
      }, err => console.log(err)
    );
  }

  fetchCluster() {
    this.clusterService.getAll().subscribe(
      res => {
        this.clustersData = res.data;
      },
      error => {
        console.error(error);
      }
    );
  }

  // ต้องไปแก้ที่ Api เพราะว่าต้องลบ log ออกทั้งหมด
  resetScore() {
    const dialog = confirm('all score will be set to 0 !\n contiune?');
    if (dialog === true) {
      this.scoreService.resetScore().subscribe(
        res => {
          console.log(res);
          this.fetchScore();
        }, err => console.log(err)
      );
    }

  }

}
