import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ScoreService } from 'src/app/services/score.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  selectedUser: string;
  usersData: Array<any>;
  userLogsData: Array<any>;

  us_id;
  edit_point;

  constructor(
    private usersService: UsersService,
    public scoreService: ScoreService
  ) { }

  ngOnInit() {
    this.fetchUser();
  }
  
  fetchUser(){
    this.usersService.getAll().subscribe((res) => {
      this.usersData = res['data'];
    })
  }

  viewLogs(us_id, us_name = ""){
    console.log(us_id);
    this.selectedUser = us_name;

    this.usersService.us_id = us_id;
    this.usersService.getLogs().subscribe(
      res => {
        console.log(res['data']);
        this.userLogsData = res['data'];
      }, err => console.log(err)
    );
  }

  edit(index){
    const data = this.usersData[index];
    this.selectedUser = data.us_username;
    console.log(data);
    this.us_id = data.us_id;
    this.edit_point = data.um_points;
  }

  update(){
    this.scoreService.us_id = this.us_id;
    this.scoreService.sc_score = this.edit_point;
    this.scoreService.updateUserPoint().subscribe(
      res => {
        this.fetchUser();
      }, err => console.log(err)
    );
  }

  delete(index, us_id){
    var dialog = confirm(`It will delete user "${this.usersData[index].us_username}" from database.\nAre you sure?`);
    if (dialog == true) {
      this.usersService.us_id = us_id;
      this.usersService.delete().subscribe(
        res => {
          this.usersData.splice(index, 1);
        },
        error => console.log(error)
      );
    } else {
      return;
    }
  }

  convertDate(dateTime){
    let date = new Date(dateTime);
    return date.toUTCString();
  }

  restoreVotePoint(index){
    let data = this.userLogsData[index];
    console.log(data);
    this.scoreService.us_id = data.vl_us_id;
    this.scoreService.sc_id = data.sc_id;
    this.scoreService.vl_id = data.vl_id;
    this.scoreService.sc_score = data.voted_score;

    this.scoreService.restore().subscribe(
      res => {
        this.viewLogs(data.vl_us_id);
        this.fetchUser();
      }, err => console.log(err)
    );

  }

  restoreAllVotePoint(){
    let count = 0;
    const data = this.userLogsData;

    data.reduce(
      (previous, next) => {
        return previous.then(() =>
        {
          console.log(next.vl_id);
          this.scoreService.us_id = next.vl_us_id;
          this.scoreService.sc_id = next.sc_id;
          this.scoreService.vl_id = next.vl_id;
          this.scoreService.sc_score = next.voted_score;
          return this.scoreService.restore().subscribe(
            res => {
              console.log(res);
              let index = this.userLogsData.findIndex(e => e.vl_us_id == next.vl_us_id);
              this.userLogsData.splice(index);
              this.fetchUser();
            },
            err => console.log(err)
          );
        })
      }, Promise.resolve()
    ).then(() => {
      console.log("All done.");
    })
    .catch(error => console.log(error));

  }

}
