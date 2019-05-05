import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { VoteTimeService } from 'src/app/services/vote-time.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  us_id: any;
  username: String;
  hasScore: any;

  canVote: boolean = false;

  interval;
  countDownTimer;

  systemNameText
  homeText
  logoutText
  pointText
  multiPointText

  constructor(
    private router: Router,
    private usersService: UsersService,
    private voteTimeService: VoteTimeService,
    private appSetting: AppSettingsServiceService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    
    if(sessionStorage.getItem("us_id") == null){
      this.router.navigate(['login']);
    }else{
      this.us_id = sessionStorage.getItem("us_id");
    }

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

    this.fetchVoteTime();

    this.usersService.us_id = this.us_id;
    this.usersService.getByKey().subscribe(
      (res) => {
        console.log(res['data'][0]);
        let data = res['data'][0];
        
        this.username = data.us_username;
        this.hasScore = data.um_points;
      },
      error => console.log(error)
    );

  }

  fetchVoteTime(){
    this.voteTimeService.getAll().subscribe(
      res => {
        const data = res['data'][0];
        const startVote = new Date(data['vt_start_vote']);
        const endVote = new Date(data['vt_end_vote']);
        console.log(startVote, endVote);
        this.startCountDown(startVote, endVote);
      }, error => console.log(error)
    );
  }

  startCountDown(startDateTime: Date, endDateTime: Date){

    this.interval = setInterval(() => {
      let toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
      let nowDate = new Date(toDayString);
      let leftTime = startDateTime.getTime() - nowDate.getTime();
      this.countDownTimer = this.millisecToStringOutput(leftTime);
      // console.log(nowDate);
      if(nowDate.getTime() >= startDateTime.getTime()){
        if(nowDate.getTime() >= endDateTime.getTime()){
          // console.log("END !!!!!!!!!!!!!");
          this.canVote = false;
          this.countDownTimer = "VOTE IS END !!";
          clearInterval(this.interval);
        }else{
          this.canVote = true;
          // console.log("START !!!!!!!!!!!!!");
        } 
      }
    }, 1000);

  }

  setText(langData){
    this.systemNameText = langData.system_name;
    this.homeText = langData.home;
    this.logoutText = langData.logout;
    this.pointText = langData.point;
    this.multiPointText = langData.multi_point;
  }

  setHasScoreParent($event){
    this.hasScore = $event;
  }

  millisecToStringOutput(millisec){
    let second =  Math.ceil(millisec / 1000);
    let s = second % 60;
    let m =  Math.floor(second / 60) % 60;
    let h =  Math.floor(second / 3600) % 24;
    let d =  Math.floor(second / 86400);
    if(d <= 0){
      return this.getZeroPrefix(h)+" : "+this.getZeroPrefix(m)+" : " + this.getZeroPrefix(s) + " ชม.";
    }else{
      return d+" วัน "+this.getZeroPrefix(h)+" : "+this.getZeroPrefix(m)+" : " + this.getZeroPrefix(s) + " ชม.";
    }
    
  }

  getZeroPrefix(time){
    return (time < 10?"0":"") + time;
  }

}
