import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service' 
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cluster-management',
  templateUrl: './cluster-management.component.html',
  styleUrls: ['./cluster-management.component.css']
})
export class ClusterManagementComponent implements OnInit {

  clustersData: Array<any>;

  ct_sequence: Number;
  ct_name_th: String;
  ct_name_en: String;
  ct_img: File;
  ct_color: String = "#";

  imgURL: String = "http://localhost:3000/images/cluster/";

  constructor(private clusterService: ClusterService) { }

  ngOnInit() {
    this.fetchCluster();
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

}
