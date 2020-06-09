import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/services/scrum/event.service';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';
import { UsersService } from 'src/app/services/users.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  searchText: any = { se_name: '', se_details: '', se_values: '' };

  us_id: any;
  username: String;

  eventData = [];
  clusterData = [];

  se_id: any;
  se_name: any;
  se_details: any;
  se_values: any;

  sl_ct_id = [];
  sl_se_id: any;

  checkedAllBtn = 0;

  rootPath: string;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private clusterService: ClusterService,
    private eventService: EventService,
    private logService: LogService,
    private appSetting: AppSettingsServiceService,
    private datepipe: DatePipe,
    private filterPipe: FilterPipe
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('us_id') == null) {
      // this.router.navigate(['login']);
    } else {
      const lastLogin = parseInt(sessionStorage.getItem('last_login'));
      const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
      const now = new Date(toDayString).getTime();
      if (now - lastLogin >= this.appSetting.canStillLoginTime) {
        this.router.navigate(['login']);
      }
      this.us_id = sessionStorage.getItem('us_id');
      this.usersService.us_id = this.us_id;
      this.usersService.loginCompleted().subscribe(
        (res) => {
          const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
          const nowLastLogin = new Date(toDayString).getTime().toString();

          sessionStorage.setItem('last_login', nowLastLogin);
        }, err => console.error(err)
      );
    }

    this.rootPath = this.router.url;

    this.fetch();
    this.fetch_ct();

    this.usersService.us_id = this.us_id;
    this.usersService.getByKey().subscribe(
      (res) => {
        const data = res.data[0];
        const lastLoging = this.datepipe.transform(new Date(data.us_lastlogin), 'yyyy-MM-dd HH:mm:ss', '+0700');

        if (this.appSetting.isDebuging) {
          console.log(data.us_id, data.us_username, lastLoging);
        }

        this.username = data.us_username;
      },
      error => console.error(error)
    );
  }

  search() {

  }

  fetch() {
    this.eventService.getAll().subscribe(
      res => {
        this.eventData = res.data;
        console.log(res.data)
      }, err => console.log(err)
    );
  }

  fetch_ct() {
    this.clusterService.getAll().subscribe(
      res => {
        this.clusterData = res.data;
      }, err => console.log(err)
    );
  }

  edit(index: string | number) {
    const data = this.eventData[index];

    this.se_id = data.se_id;
    this.se_name = data.se_name;
    this.se_details = data.se_details;
    this.se_values = data.se_values;
  }

  delete(index: number, se_id: any) {
    confirm(`Want to delete cluster "${this.eventData[index].se_name}" ?`);
    this.eventService.se_id = se_id;
    this.eventService.delete().subscribe(
      res => {
        this.eventData.splice(index, 1);
        console.log(`${se_id} is deleted!`);
      }, err => console.error(err)
    );
  }

  closeModal() {
    this.se_id = null;
    this.se_name = null;
    this.se_details = null;
    this.se_values = null;
  }

  closeModal_log() {

  }

  checkAll() {
    if (this.checkedAllBtn == 0) {
      this.clusterData.forEach((e, i) => {
        this.sl_ct_id[i] = e.ct_id;
      });
      this.checkedAllBtn = 1;
    } else {
      this.sl_ct_id = [];
      this.checkedAllBtn = 0;
    }

  }

  save_log() {
    if (this.sl_se_id != null) {

      console.log(this.sl_ct_id);

      this.sl_ct_id.forEach((e, i) => {
        this.logService.sl_se_id = this.sl_se_id;
        if (e) {
          this.logService.sl_ct_id = this.clusterData[i].ct_id;
          this.logService.insert().subscribe(
            res => {
              console.log(res);
            },
            error => console.error(error)
          );
        }




      });

    } else {
      alert('ERROR');
    }
  }

  save() {
    if (this.se_name != null) {

      if (this.se_id != null) {
        this.eventService.se_id = this.se_id;
        this.eventService.se_name = this.se_name;
        this.eventService.se_details = this.se_details;
        this.eventService.se_values = this.se_values;

        this.eventService.update().subscribe(
          res => {
            console.log(res);
            this.fetch();
          }, err => console.error(err)
        );
        return;

      }

      this.eventService.se_name = this.se_name;
      this.eventService.se_details = this.se_details;
      this.eventService.se_values = this.se_values;

      this.eventService.insert().subscribe(
        res => {
          console.log(res);
          this.fetch();
        },
        error => console.error(error)
      );

    } else {
      alert('ERROR');
    }

  }

}
