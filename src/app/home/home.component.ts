import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  us_id: any;
  username: String;
  hasScore: any;

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("us_id") == null)
      this.router.navigate(['login']);
    else
      this.us_id = sessionStorage.getItem("us_id");

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

  setHasScoreParent($event){
    this.hasScore = $event;
  }

}
