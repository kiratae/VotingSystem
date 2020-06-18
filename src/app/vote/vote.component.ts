import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ClusterService } from 'src/app/services/cluster.service';
import { UsersService } from 'src/app/services/users.service';
import { ScoreService } from 'src/app/services/score.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @ViewChild('closeModal') private closeModal: ElementRef;

  voteScore = 0;
  clustersData = [];

  onePointBtn = false;
  twoPointBtn = false;
  fivePointBtn = false;
  tenPointBtn = false;

  clusterNameToVote = null;
  clusterToVote = null;

  imgURL: String;

  timer = 500;
  interval;

  voteHeaderText;
  voteText;
  pointText;
  multiPointText;

  isVoting = false;

  @Output() hasScoreOutput = new EventEmitter<any>();

  hasScore: any = 0;
  remainScore = this.hasScore;

  nowTime: string;
  nowDate: string;

  constructor(
    private router: Router,
    private clusterService: ClusterService,
    private usersService: UsersService,
    private scoreService: ScoreService,
    private appSetting: AppSettingsServiceService,
    private notifier: NotifierService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('us_id') == null) {
      this.router.navigate(['login']);
      return;
    }
    
    this.fetchCluster();
    this.fetchScore();

    switch (this.appSetting.lang) {
      case 'EN':
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.main_section);
          }, error => console.error(error)
        );
        break;
      case 'TH':
        this.appSetting.getTH().subscribe(
          res => {
            this.setText(res.main_section);
          }, error => console.error(error)
        );
        break;
    }

    if (this.clusterNameToVote == null) {
      this.clusterNameToVote = 'NULL';
    }

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

  initUI() {
    this.tenPointBtn = (this.hasScore >= 10) ? false : true;
    this.fivePointBtn = (this.hasScore >= 5) ? false : true;
    this.twoPointBtn = (this.hasScore >= 2) ? false : true;

    if (this.hasScore >= 1) {
      this.onePointBtn = false;
      this.voteScore = 0;
    } else {
      this.onePointBtn = true;
      this.voteScore = 0;
    }
  }

  fetchScore() {
    this.usersService.us_id = sessionStorage.getItem('us_id');
    this.usersService.getByKey().subscribe(
      (res) => {
        const data = res.data[0];

        this.hasScore = data.um_points;

        this.updateRemainScore();
        this.sentHasScore();
        this.initUI();
      },
      error => console.error(error)
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

  hideModel(){
    this.voteScore = 0;
    this.updateRemainScore();
    this.closeModal.nativeElement.click();  
  }

  setText(langData) {
    this.voteHeaderText = langData.vote_header;
    this.voteText = langData.vote;
    this.pointText = langData.point;
    this.multiPointText = langData.multi_point;
  }

  sentHasScore() {
    this.hasScoreOutput.emit(this.hasScore);
  }

  clickToVote(index) {
    if (this.appSetting.isDebuging) {
      console.log(this.clustersData[index]);
    }

    this.clusterToVote = this.clustersData[index];
    this.clusterNameToVote = this.clusterToVote.ct_name_th;
  }

  keyupScore(event) {
    if (event.keyCode != 69) {
      if (this.voteScore <= 0 || this.voteScore == null) {
        this.voteScore = 0;
      }
      if (this.voteScore > this.hasScore) {
        this.voteScore = this.hasScore;
      }
      this.updateRemainScore();
    } else {
      this.voteScore = 0;
      this.updateRemainScore();
    }
  }

  vote() {
    if (this.voteScore <= 0 || this.voteScore > this.hasScore) {
      this.notifier.notify('error', `ค่า ${this.voteScore} ไม่ถูกต้องสำหรับคะแนน !`);
      this.hideModel()
      return;
    }

    this.isVoting = true

    this.scoreService.sc_ct_id = this.clusterToVote.ct_id;
    this.scoreService.sc_score = this.voteScore;
    this.scoreService.us_id = sessionStorage.getItem('us_id');

    this.scoreService.createLog().subscribe(res => {
      // console.log(res);
      this.isVoting = false

      if (res.status == 1) {
        // something error here! may be score is out!
        this.notifier.notify('error', `คะแนนของคุณไม่พอที่จะทำการโหวต !`);
        this.voteScore = 0;
        this.updateRemainScore();
      } else if (res.status == 0) {
        // ok save the vote
        this.notifier.notify( 'success', `สำเร็จ! คุณได้โหวต ${this.voteScore} คะแนน ให้กับ ${this.clusterNameToVote} แล้ว` );
        this.fetchScore();
        this.clusterToVote = null;
        this.voteScore = 0;
        this.updateRemainScore();
        this.closeModal.nativeElement.click();
      } else {
        // may be network or server error
        this.notifier.notify('error', `เกิดข้อผิดพลาด โหวตไม่สำเร็จ !`);
        this.voteScore = 0;
        this.updateRemainScore();
      }
      
    });

  }

  setScore(score) {
    if (this.voteScore <= this.hasScore - score) {
      this.voteScore += score;
      this.updateRemainScore();
    }
  }

  plusScore() {
    if (this.voteScore < this.hasScore) {
      this.voteScore++;
      this.updateRemainScore();
    }
  }

  minusScore() {
    if (this.voteScore > 0) {
      this.voteScore--;
      this.updateRemainScore();
    }
  }

  minusScoreDown() {
    this.interval = setInterval(() => {
      if (this.voteScore > 1) {
        this.voteScore--;
        this.updateRemainScore();
      }
    }, 150);
  }

  plusScoreDown() {
    this.interval = setInterval(() => {
      if (this.voteScore < this.hasScore) {
        this.voteScore++;
        this.updateRemainScore();
      }
    }, 150);
  }

  cancelInterval() {
    clearInterval(this.interval);
  }

  updateRemainScore() {
    this.remainScore = this.hasScore - this.voteScore;

    this.tenPointBtn = (this.remainScore >= 10) ? false : true;
    this.fivePointBtn = (this.remainScore >= 5) ? false : true;
    this.twoPointBtn = (this.remainScore >= 2) ? false : true;
    this.onePointBtn = (this.remainScore >= 1) ? false : true;
  }

}
