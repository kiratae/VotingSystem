import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ClusterService } from 'src/app/services/cluster.service';
import { UsersService } from 'src/app/services/users.service';
import { ScoreService } from 'src/app/services/score.service'
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  voteScore;
  clustersData = [];

  onePointBtn = false;
  twoPointBtn = false;
  fivePointBtn = false;
  tenPointBtn = false;

  clusterNameToVote = null
  clusterToVote = null

  imgURL: String;

  timer: number = 500;
  interval;

  voteHeaderText;
  voteText;
  pointText;
  multiPointText;

  @Output() hasScoreOutput = new EventEmitter<any>();

  hasScore: any  = 0;

  constructor(
    private router: Router,
    private clusterService: ClusterService,
    private usersService: UsersService,
    private scoreService: ScoreService,
    private appSetting: AppSettingsServiceService
  ) {}

  ngOnInit() {

    this.imgURL = this.appSetting.apiURL+'/images/cluster/';
    
    this.fetchCluster();
    this.fetchScore();

    switch(this.appSetting.lang){
      case "EN":
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.main_section);
          }, error => console.log(error)
        );
      break;
      case "TH":
      this.appSetting.getTH().subscribe(
        res => {
          this.setText(res.main_section);
        }, error => console.log(error)
      );
      break; 
    }

    if(this.clusterNameToVote == null){
     this.clusterNameToVote = "NULL";
    }

  }

  initUI(){
    this.tenPointBtn = (this.hasScore >= 10)?false:true;
    this.fivePointBtn = (this.hasScore >= 5)?false:true;
    this.twoPointBtn = (this.hasScore >= 2)?false:true;

    if(this.hasScore >= 1){
      this.onePointBtn = false;
      this.voteScore = 1;
    }else{
      this.onePointBtn = true;
      this.voteScore = 0;
    }
  }

  fetchScore(){
    this.usersService.us_id = sessionStorage.getItem("us_id");
    this.usersService.getByKey().subscribe(
      (res) => {
        console.log(res['data'][0]);
        let data = res['data'][0];
        
        this.hasScore = data.um_points;

        this.sentHasScore();
        this.initUI();
      },
      error => console.log(error)
    );
  }

  fetchCluster(){
    this.clusterService.getAll().subscribe(
      res => {
        this.clustersData = res['data'];
      },
      error => {
        console.error(error);
      }
    );
  }

  setText(langData){
    this.voteHeaderText = langData.vote_header;
    this.voteText = langData.vote;
    this.pointText = langData.point;
    this.multiPointText = langData.multi_point;
  }


  sentHasScore(){
    this.hasScoreOutput.emit(this.hasScore);
  }

  clickToVote(index){
    console.log(this.clustersData[index]);
    this.clusterToVote = this.clustersData[index];
    this.clusterNameToVote = this.clusterToVote.ct_name_th;
  }

  keyupScore(){
    if(this.voteScore < 0){
      this.voteScore = 0;
    }
    if(this.voteScore > this.hasScore){
      this.voteScore = this.hasScore;
    }
  }

  vote(){

    this.scoreService.sc_ct_id = this.clusterToVote.ct_id;
    this.scoreService.sc_score = this.voteScore;
    this.scoreService.us_id = sessionStorage.getItem("us_id");

    this.scoreService.vote().subscribe(
      res => {
        console.log("vote!");
        this.fetchScore();
        this.clusterToVote = null;
      },
      error => console.log(error)
      
    );

  }

  setScore(score){
    this.voteScore = score;
  }

  plusScore(){
    if(this.voteScore < this.hasScore)
      this.voteScore++;
  }

  minusScore(){
    if(this.voteScore > 1)
      this.voteScore--;
  }

  minusScoreDown(){
    this.interval = setInterval(() => {
      if(this.voteScore > 1)
        this.voteScore--
    }, 150);
  }

  plusScoreDown(){
    this.interval = setInterval(() => {
      if(this.voteScore < this.hasScore)
        this.voteScore++;
    }, 150);
  }

  cancelInterval(){
    clearInterval(this.interval);
  }

}