import { Component, OnInit } from '@angular/core';
import { UserTypeService } from 'src/app/services/user-type.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type-management',
  templateUrl: './user-type-management.component.html',
  styleUrls: ['./user-type-management.component.css']
})
export class UserTypeManagementComponent implements OnInit {

  usersTypeData = []

  ut_id;
  ut_name_th;
  ut_name_en;

  constructor(
    private router: Router,
    private userTypeService: UserTypeService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('us_id') == null || sessionStorage.getItem('user_type') != 'Admin') {
      this.router.navigate(['login']);
      return;
    }

    this.fetch();
  }

  fetch(){
    this.userTypeService.getAll().subscribe((res) => {
      this.usersTypeData = res['data'];
    })
  }

  edit(index){
    let data = this.usersTypeData[index];

    this.ut_id = data.ut_id;
    this.ut_name_th = data.ut_name_th;
    this.ut_name_en = data.ut_name_en;
  }

  delete(index, ut_id){
    confirm(`Want to delete cluster "${this.usersTypeData[index].ut_name_th}" ?`);
    this.userTypeService.ut_id = ut_id;
    this.userTypeService.delete().subscribe(
      res => {
        this.usersTypeData.splice(index, 1);
        if(this.appSetting.isDebuging)
          console.log(`${ut_id} is deleted!`);
      }, err => console.error(err)
    );
  }

  closeModal(){
    this.ut_id = null;
    this.ut_name_th = null;
    this.ut_name_en = null;
  }

  save(){
    if(this.ut_name_th != null) {

      if(this.ut_id != null){
        this.userTypeService.ut_id = this.ut_id;
        this.userTypeService.ut_name_th = this.ut_name_th;
        this.userTypeService.ut_name_en = this.ut_name_en;
    
        this.userTypeService.update().subscribe(
          res => {
            if(this.appSetting.isDebuging)
              console.log(res);
            this.fetch();
          }, err => console.error(err)
        );
        return;

      }

      this.userTypeService.ut_name_th = this.ut_name_th;
      this.userTypeService.ut_name_en = this.ut_name_en;

      this.userTypeService.insert().subscribe(
        res => {
          if(this.appSetting.isDebuging)
            console.log(res);
          this.fetch();
        },
        error => console.error(error)
      );

    }else{
      alert("ERROR")
    }

  }

}
