import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
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
    private appSetting: AppSettingsServiceService
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

    let dateStartString = '2019-05-01 19:40:00'
    let dateEndString = '2019-05-01 19:41:00' 
    let startDate = new Date(dateStartString);
    let endDate = new Date(dateEndString);
    
    this.interval = setInterval(() => {
      let nowDate = new Date();
      let leftTime = startDate.getTime() - nowDate.getTime();
      this.countDownTimer = this.millisecToStringOutput(leftTime);
      console.log(nowDate.toUTCString());
      if(nowDate.getTime() >= startDate.getTime()){
        if(nowDate.getTime() >= endDate.getTime()){
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
    let m =  Math.floor(second / 60);
    return this.getZeroPrefix(m)+" : " + this.getZeroPrefix(s);
  }

  getZeroPrefix(time){
    return (time < 10?"0":"") + time;
  }

}
