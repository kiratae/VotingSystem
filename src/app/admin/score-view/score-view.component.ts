import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})
export class ScoreViewComponent implements OnInit {

  scoresData: Array<any>;

  constructor(
    private scoreService: ScoreService
  ) { }

  ngOnInit() {
    this.fetchScore();
  }

  fetchScore(){
    this.scoreService.getScore().subscribe(
      res => {
        console.log(res['data']);
        this.scoresData = res['data'];
      }, err => console.log(err)
    );
  }

  resetScore(){
    var dialog = confirm("all score will be set to 0 !\n contiune?");
    if(dialog == true){
      this.scoreService.resetScore().subscribe(
        res => {
          console.log(res);
          this.fetchScore();
        }, err => console.log(err)
      );
    }

  }

}
