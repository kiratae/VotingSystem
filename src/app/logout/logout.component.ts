import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'modal-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  headerText;
  bodyText;
  confirmText;
  cancelText;

  constructor(
    private router: Router,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    switch(this.appSetting.lang){
      case "EN":
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.modal.logout);
          }, error => console.log(error)
        );
      break;
      case "TH":
      this.appSetting.getTH().subscribe(
        res => {
          this.setText(res.modal.logout);
        }, error => console.log(error)
      );
      break; 
    }
  }

  public logout() {
    sessionStorage.removeItem("us_id");
    sessionStorage.removeItem("user_type");
    console.log("loging out...");
    this.router.navigate(['login']);
  }

  setText(langData){
    this.headerText = langData.header;
    this.bodyText = langData.body;
    this.confirmText = langData.confirm;
    this.cancelText = langData.cancel;
  }

}
