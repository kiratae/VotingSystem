import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-cluster-management',
  templateUrl: './cluster-management.component.html',
  styleUrls: ['./cluster-management.component.css']
})
export class ClusterManagementComponent implements OnInit {

  clustersData: Array<any>;

  systemsData: Array<any>;

  ct_sequence: Number;
  ct_name_th: String;
  ct_name_en: String;
  ct_img: File;
  ct_color: String = "#";
  sm_sys_id: any;

  imgURL: String = "http://localhost:3000/images/cluster/";

  constructor(
    private clusterService: ClusterService,
    private systemService: SystemService
  ) { }

  ngOnInit() {
    this.fetchCluster();
    this.fetchSystem();
  }

  fetchCluster(){
    this.clusterService.getAll().subscribe(
      (res) => {
        this.clustersData = res['data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchSystem(){
    this.systemService.getAll().subscribe(
      (res) => {
        this.systemsData = res['data'];
        this.sm_sys_id = this.systemsData[0].sys_id;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveCluster(){
    if(this.ct_img != null && this.ct_sequence != null && this.ct_name_th != null && this.ct_color.length == 7 && this.ct_color[0] == "#") {

      this.clusterService.ct_img = this.ct_img;

      this.clusterService.uploadImg().subscribe(
        res => {
          console.log(res[0].filename);

          this.clusterService.ct_sequence = this.ct_sequence;
          this.clusterService.ct_name_th = this.ct_name_th;
          this.clusterService.ct_name_en = this.ct_name_en;
          this.clusterService.ct_img = res[0].filename;
          this.clusterService.ct_color_code = this.ct_color;

          this.clusterService.sm_sys_id = this.sm_sys_id;

          this.clusterService.insert().subscribe(
            res => {
              console.log(res);
              this.fetchCluster();
            },
            error => console.log(error)
          )
        },
        error => console.log(error)
      );

    }else{
      alert("ERROR")
    }

  }

  fileChangeListener(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);
      let fileType = file.name.split('.').pop()

      if(fileType == 'jpg' || fileType == 'png' || fileType == 'gif' || fileType == 'JPG' || fileType == 'PNG' || fileType == 'GIF'){
        this.ct_img = file;
      }else{
        
        alert("Please select image file !");
      }
      
    }
  }

  show(element: HTMLInputElement){
    if(this.ct_color.length < 7){
      element.style.color = "#ffffff";
      return;
    }else if(this.ct_color.length > 7){
      this.ct_color = this.ct_color.substring(0, 7);
    }
    element.style.color = this.ct_color.toString();
  }

  editCluster(index, element: HTMLInputElement){
    let data = this.clustersData[index];
    console.log(data);

    this.ct_sequence = data.ct_sequence;
    this.ct_name_th = data.ct_name_th;
    this.ct_name_en = data.ct_name_en;
    this.ct_color = data.ct_color_code;
    this.ct_img = data.ct_img;

    this.sm_sys_id = data.sys_id;

    element.style.color = this.ct_color.toString();
  }

  deleteCluster(index, ct_id){
    this.clusterService.ct_id = ct_id;
    this.clusterService.delete().subscribe(
      res => {
        this.clustersData.splice(index, 1);
        console.log(`${ct_id} is deleted!`);
      }, err => console.log(err)
    );
  }

}
