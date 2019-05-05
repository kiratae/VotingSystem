import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { VoteTimeService } from 'src/app/services/vote-time.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  viewMode = "main"
  us_id: any;
  username: String;

  startVote;
  endVote;

  nowTime;
  nowDate;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private voteTimeService: VoteTimeService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("us_id") != null && sessionStorage.getItem("user_type") != "Admin"){
      this.router.navigate([''])
    }

    this.usersService.us_id = this.us_id = sessionStorage.getItem("us_id");;
    this.usersService.getByKey().subscribe(
      (res) => {
        console.log(res['data'][0]);
        let data = res['data'][0];
        
        this.username = data.us_username;
      }, error => console.log(error)
    );
    
    this.voteTimeService.getAll().subscribe(
      res => {
        let data = res['data'][0];
        this.startVote = this.datepipe.transform(new Date(data['vt_start_vote']), 'yyyy-MM-ddThh:mm');
        this.endVote = this.datepipe.transform(new Date(data['vt_end_vote']), 'yyyy-MM-ddThh:mm');
        console.log(data, this.startVote, this.endVote);
        
      }, error => console.log(error)
    );

    setInterval(() => {
      let nowDate = new Date();
      this.nowTime = this.dateToTimeStringOutput(nowDate);
      this.nowDate = this.dateToStringOutput(nowDate);
    }, 1000);

  }

  dateToTimeStringOutput(date: Date){
    let s = date.getSeconds();
    let m =  date.getMinutes();
    let h =  date.getHours();
    return this.getZeroPrefix(h)+" : "+this.getZeroPrefix(m)+" : " + this.getZeroPrefix(s);
  }

  dateToStringOutput(date: Date){
    let d = date.getDate();
    let m =  date.getMonth();
    let y =  date.getFullYear();
    return `${this.getZeroPrefix(d)}/${this.getZeroPrefix(m)}/${y}`;
  }

  getZeroPrefix(time){
    return (time < 10?"0":"") + time;
  }

  changeTab(viewMode){
    this.viewMode = viewMode;
  }

}
