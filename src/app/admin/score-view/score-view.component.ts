import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})
export class ScoreViewComponent implements OnInit {

  scoresData: Array<any>;
  imgURL: String;

  constructor(
    private scoreService: ScoreService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
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
