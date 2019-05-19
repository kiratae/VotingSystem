import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/scrum/event.service';
import { LogService } from 'src/app/services/scrum/log.service';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  eventData = []
  clusterData = []

  se_id;
  se_name;
  se_details;
  se_values;

  sl_ct_id = [];
  sl_se_id;

  checkedAllBtn = 0;

  rootPath = location.origin;

  constructor(
    private router: Router,
    private clusterService: ClusterService,
    private eventService: EventService,
    private logService: LogService
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("us_id") != null && sessionStorage.getItem("user_type") != "Scum Master"){
      this.router.navigate([''])
    }

    this.fetch();
    this.fetch_ct();
  }

  
  fetch(){
    this.eventService.getAll().subscribe(
      res => {
        this.eventData = res['data'];
      }, err => console.log(err)
    );
  }

  fetch_ct(){
    this.clusterService.getAll().subscribe(
      res => {
        this.clusterData = res['data'];
      }, err => console.log(err)
    );
  }

  edit(index){
    let data = this.eventData[index];

    this.se_id = data.se_id;
    this.se_name = data.se_name;
    this.se_details = data.se_details;
    this.se_values = data.se_values;
  }

  delete(index, se_id){
    confirm(`Want to delete cluster "${this.eventData[index].se_name}" ?`);
    this.eventService.se_id = se_id;
    this.eventService.delete().subscribe(
      res => {
        this.eventData.splice(index, 1);
        console.log(`${se_id} is deleted!`);
      }, err => console.error(err)
    );
  }

  closeModal(){
    this.se_id = null;
    this.se_name = null;
    this.se_details = null;
    this.se_values = null;
  }

  closeModal_log(){
    
  }

  checkAll(){
    if(this.checkedAllBtn == 0){
      this.clusterData.forEach((e, i) => {
        this.sl_ct_id[i] = e.ct_id;
      });
      this.checkedAllBtn = 1;
    }else{
      this.sl_ct_id = [];
      this.checkedAllBtn = 0;
    }
    
  }

  save_log(){
    if(this.sl_se_id != null) {

      console.log(this.sl_ct_id);

      this.sl_ct_id.forEach((e, i) => {
        this.logService.sl_se_id = this.sl_se_id;
        if(e){
          this.logService.sl_ct_id = this.clusterData[i].ct_id
          this.logService.insert().subscribe(
            res => {
              console.log(res);
            },
            error => console.error(error)
          );
        }
        

        

      });

    }else{
      alert("ERROR")
    }
  }

  save(){
    if(this.se_name != null) {

      if(this.se_id != null){
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

    }else{
      alert("ERROR")
    }

  }

}
