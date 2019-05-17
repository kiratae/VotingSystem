import { Component, OnInit } from '@angular/core';
import { UserTypeService } from 'src/app/services/user-type.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

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
    private userTypeService: UserTypeService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userTypeService.getAll().subscribe((res) => {
      this.usersTypeData = res['data'];
    })
  }

  edit(){

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

  }

}
