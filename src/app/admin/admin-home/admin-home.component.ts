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

  viewMode = 'main'
  us_id: any;
  username: String;

  startVote: string;
  endVote: string;

  nowTime: string;
  nowDate: string;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private voteTimeService: VoteTimeService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('us_id') != null && sessionStorage.getItem('user_type') != 'Admin') {
      this.router.navigate(['']);
    }

    this.usersService.us_id = this.us_id = sessionStorage.getItem('us_id');
    this.usersService.getByKey().subscribe(
      (res) => {

        console.log(res.data[0]);
        const data = res.data[0];

        this.username = data.us_username;
        console.log(this.username); // Check username
      }, error => console.log(error)
    );

    this.fetchVoteTime();

    setInterval(() => {
      const nowDate = new Date();
      this.nowTime = this.dateToTimeStringOutput(nowDate);
      this.nowDate = this.dateToStringOutput(nowDate);
    }, 1000);

  }

  fetchVoteTime() {
    this.voteTimeService.getAll().subscribe(
      res => {
        const data = res.data[0];
        this.startVote = this.datepipe.transform(new Date(data.vt_start_vote), 'yyyy-MM-dd HH:mm:ss');
        this.endVote = this.datepipe.transform(new Date(data.vt_end_vote), 'yyyy-MM-dd HH:mm:ss');
        console.log(data, this.startVote, this.endVote);
      }, error => console.log(error)
    );

  }

  setTime() {
    this.voteTimeService.vt_start_vote = this.startVote;
    this.voteTimeService.vt_end_vote = this.endVote;
    this.voteTimeService.update().subscribe(
      res => {
        console.log('Date start |' + this.startVote);
        console.log('Date end |' + this.endVote);
        console.log(res);
      }, error => console.log(error)
    );
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

  changeTab(viewMode: string) {
    this.viewMode = viewMode;
  }

}
