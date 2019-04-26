import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  viewMode = "user"
  us_id: any;
  username: String;

  constructor(
    private router: Router,
    private usersService: UsersService
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
      },
      error => console.log(error)
    );
  }

  changeTab(viewMode){
    this.viewMode = viewMode;
  }

}
