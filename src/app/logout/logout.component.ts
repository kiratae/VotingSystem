import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public logout() {
    sessionStorage.removeItem("us_id");
    sessionStorage.removeItem("user_type");
    console.log("loging out...");
    this.router.navigate(['login']);
  }

}
