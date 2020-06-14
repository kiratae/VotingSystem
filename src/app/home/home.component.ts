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

  canVote = 0;
  isEndVote = false;

  interval;
  countDownTimer;

  systemNameText;
  homeText;
  logoutText;
  pointText;
  multiPointText;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private voteTimeService: VoteTimeService,
    private appSetting: AppSettingsServiceService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {

    if (sessionStorage.getItem('us_id') == null) {
      this.router.navigate(['login']);
    } else {
      const lastLogin = parseInt(sessionStorage.getItem('last_login'));
      const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
      const now = new Date(toDayString).getTime();
      if (now - lastLogin >= this.appSetting.canStillLoginTime) {
        this.router.navigate(['login']);
      }
      this.us_id = sessionStorage.getItem('us_id');
      this.usersService.us_id = this.us_id;
      this.usersService.loginCompleted().subscribe(
        (res) => {
          const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
          const nowLastLogin = new Date(toDayString).getTime().toString();

          sessionStorage.setItem('last_login', nowLastLogin);
        }, err => console.error(err)
      );
    }

    switch (this.appSetting.lang) {
      case 'EN':
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.main_section);
          }, error => console.log(error)
        );
        break;
      case 'TH':
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
        const data = res.data[0];
        const lastLoging = this.datepipe.transform(new Date(data.us_lastlogin), 'yyyy-MM-dd HH:mm:ss', '+0700');

        if (this.appSetting.isDebuging) {
          console.log(data.us_id, data.us_username, lastLoging);
        }

        this.username = data.us_username;
        this.hasScore = data.um_points;
      },
      error => console.error(error)
    );

  }

  fetchVoteTime() {
    this.canVote = -1;
    this.voteTimeService.getAll().subscribe(
      res => {
        const data = res.data[0];
        const startVote = new Date(data.vt_start_vote);
        const endVote = new Date(data.vt_end_vote);

        if (this.appSetting.isDebuging) {
          console.log(startVote, endVote);
        }

        this.appSetting.getTimeSync().subscribe(
          res => {
            const serverDate = res[0].now;
            const now = new Date(serverDate);

            if (this.appSetting.isDebuging) {
              console.log('server time : '+now);
            }


            if (now.getTime() >= startVote.getTime()) {
              this.canVote = 1;
              if (now.getTime() >= endVote.getTime()) {
                this.canVote = 0;
                this.isEndVote = true;
              }
            } else {
              this.canVote = 0;
              this.isEndVote = false;
              // this.startCountDown(now, startVote, endVote);
              this.getCountDownWithAsync(now, startVote, endVote);
            }

          }, error => {
            this.canVote = -1;
            console.error(error);
          }
        );


      }, error => {
        this.canVote = -1;
        console.error(error);
      }
    );
  }

  async getCountDownWithAsync(now: Date, startDateTime: Date, endDateTime: Date) {
    const value =  await this.startCountDown(now, startDateTime, endDateTime) as number;
    console.log(`async result: ${value}`);
  }

  startCountDown(now: Date, startDateTime: Date, endDateTime: Date) {

    return new Promise(interval => {
      setInterval(() => {
        const toDayString = this.datepipe.transform(now, 'yyyy-MM-dd HH:mm:ss', '+0700');
        const nowDate = this.convertDateForIos(toDayString);

        if (this.appSetting.isDebuging) {
          console.log(nowDate);
        }

        const leftTime = startDateTime.getTime() - nowDate.getTime();
        this.countDownTimer = this.millisecToStringOutput(leftTime);

        // console.log(nowDate);
        if (nowDate.getTime() >= startDateTime.getTime()) {

          if (nowDate.getTime() >= endDateTime.getTime()) {
            // console.log("END VOTE !!!!!!!!!!!!!");
            this.canVote = 0;
            // this.countDownTimer = "VOTE IS END !!";
            this.isEndVote = true;
            clearInterval(this.interval);
          } else {
            this.canVote = 1;
            // console.log("START VOTE !!!!!!!!!!!!!");
          }
        }
        now.setMilliseconds(now.getMilliseconds() + 1000);
      }, 1000);
    });

  }

  convertDateForIos(date) {
    let arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    return date;
  }

  setText(langData) {
    this.systemNameText = langData.system_name;
    this.homeText = langData.home;
    this.logoutText = langData.logout;
    this.pointText = langData.point;
    this.multiPointText = langData.multi_point;
  }

  setHasScoreParent($event) {
    this.hasScore = $event;
  }

  millisecToStringOutput(millisec) {
    const second =  Math.ceil(millisec / 1000);
    const s = second % 60;
    const m =  Math.floor(second / 60) % 60;
    const h =  Math.floor(second / 3600) % 24;
    const d =  Math.floor(second / 86400);
    if (d <= 0) {
      return this.getZeroPrefix(h) + ' : ' + this.getZeroPrefix(m) + ' : ' + this.getZeroPrefix(s) + ' ชม.';
    } else {
      return d + ' วัน ' + this.getZeroPrefix(h) + ' : ' + this.getZeroPrefix(m) + ' : ' + this.getZeroPrefix(s) + ' ชม.';
    }

  }

  getZeroPrefix(time) {
    return (time < 10 ? '0' : '') + time;
  }

}
