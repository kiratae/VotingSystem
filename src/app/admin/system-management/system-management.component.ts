import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-system-management',
  templateUrl: './system-management.component.html',
  styleUrls: ['./system-management.component.css']
})
export class SystemManagementComponent implements OnInit {

  systemsData = [];

  sys_name_th;
  sys_name_en;

  constructor(
    private systemService: SystemService
  ) { }

  ngOnInit() {
    this.fetchSystems();
  }

  fetchSystems(){
    this.systemService.getAll().subscribe(
      (res) => {
        this.systemsData = res['data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveSystem(){
    if(this.sys_name_th != null && this.sys_name_en != null) {

      this.systemService.sys_name_th = this.sys_name_th;
      this.systemService.sys_name_en = this.sys_name_en;

      this.systemService.insert().subscribe(
        res => {
          console.log(res);
          this.fetchSystems();
        },
        error => console.log(error)
      );

    }else{
      alert("ERROR")
    }

  }

}
