import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-system-management',
  templateUrl: './system-management.component.html',
  styleUrls: ['./system-management.component.css']
})
export class SystemManagementComponent implements OnInit {

  systemsData = [];

  sys_id;
  sys_name_th;
  sys_name_en;

  constructor(
    private systemService: SystemService,
    private appSettings: AppSettingsServiceService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.systemService.getAll().subscribe(
      (res) => {
        this.systemsData = res['data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  save(){
    if(this.sys_name_th != null) {

      if(this.sys_id != null){
        this.systemService.sys_id = this.sys_id;
        this.systemService.sys_name_th = this.sys_name_th;
        this.systemService.sys_name_en = this.sys_name_en;
    
        this.systemService.update().subscribe(
          res => {
            if(this.appSettings.isDebuging)
              console.log(res);
            this.fetch();
          }, err => console.error(err)
        );
        return;

      }

      this.systemService.sys_name_th = this.sys_name_th;
      this.systemService.sys_name_en = this.sys_name_en;

      this.systemService.insert().subscribe(
        res => {
          if(this.appSettings.isDebuging)
            console.log(res);
          this.fetch();
        },
        error => console.error(error)
      );

    }else{
      alert("ERROR")
    }

  }

  reset_modal(){
    this.sys_id = null;
    this.sys_name_th = null;
    this.sys_name_en = null;
  }

  edit(index){
    let data = this.systemsData[index];

    this.sys_id = data.sys_id;
    this.sys_name_th = data.sys_name_th;
    this.sys_name_en = data.sys_name_en;
  }

  delete(index, id){
    confirm(`Want to delete system "${this.systemsData[index].sys_name_th}" ?`);

    this.systemService.sys_id = id;
    this.systemService.delete().subscribe(
      res => {
        if(this.appSettings.isDebuging)
          console.log(index, id);
        this.systemsData.splice(index, 1);
      }, err => console.error(err)
    );
  }

}
