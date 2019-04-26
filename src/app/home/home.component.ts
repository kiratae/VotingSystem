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

}
