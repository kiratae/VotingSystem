import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';
import { SystemService } from 'src/app/services/system.service';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cluster-management',
  templateUrl: './cluster-management.component.html',
  styleUrls: ['./cluster-management.component.css']
})
export class ClusterManagementComponent implements OnInit {

  clustersData: Array<any>;

  systemsData: Array<any>;

  ct_id: Number;
  ct_sequence: Number;
  ct_name_th: String;
  ct_name_en: String;
  ct_img_name: String;
  ct_img: File;
  ct_img_url: String;
  ct_img_preview: any;
  ct_color: String = "#";
  sm_sys_id: any;

  imgURL: String;

  isUploaded = false;
  canUpload = false;

  constructor(
    private router: Router,
    private clusterService: ClusterService,
    private systemService: SystemService,
    private appSetting: AppSettingsServiceService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('us_id') == null || sessionStorage.getItem('user_type') != 'Admin') {
      this.router.navigate(['login']);
      return;
    }

    this.fetchCluster();
    this.fetchSystem();
  }

  fetchCluster(){
    this.clusterService.getAll().subscribe(
      (res) => {
        console.log(res.data)
        this.clustersData = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchSystem(){
    this.systemService.getAll().subscribe(
      (res) => {
        this.systemsData = res.data;
        this.sm_sys_id = this.systemsData[0].sys_id;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveCluster(){
    console.log(this);
    if(this.ct_sequence != null && this.ct_name_th != null && this.ct_img_url && this.ct_color.length == 7 && this.ct_color[0] == "#") {

      if(this.ct_id != null){
        this.clusterService.ct_id = this.ct_id;
        this.clusterService.ct_sequence = this.ct_sequence;
        this.clusterService.ct_name_th = this.ct_name_th;
        this.clusterService.ct_name_en = this.ct_name_en;
        this.clusterService.ct_img = this.ct_img_url;
        this.clusterService.ct_color_code = this.ct_color;

        this.clusterService.sm_sys_id = this.sm_sys_id;

        this.clusterService.update().subscribe(
          res => {
            if(this.appSetting.isDebuging)
              console.log(res);
            this.closeModal();
            this.fetchCluster();
          },
          error => console.error(error)
        );
      }

      this.clusterService.ct_sequence = this.ct_sequence;
      this.clusterService.ct_name_th = this.ct_name_th;
      this.clusterService.ct_name_en = this.ct_name_en;
      this.clusterService.ct_img = this.ct_img_url;
      this.clusterService.ct_color_code = this.ct_color;

      this.clusterService.sm_sys_id = this.sm_sys_id;

      this.clusterService.insert().subscribe(
        res => {
          if(this.appSetting.isDebuging)
            console.log(res);
          this.closeModal();
          this.fetchCluster();
        },
        error => console.error(error)
      );

    }else{
      alert("Somthing went wrong!")
    }

  }

  fileChangeListener(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);

      if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif'){

        let reader: FileReader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.ct_img_preview = e.target['result'];
          this.ct_img = file;
          this.canUpload = true;
        }

      }else{
        this.clearUploadField();
        alert("Please select image file !");
      }
      
    }
  }

  uploadImage(){
    if(this.canUpload && this.ct_img != null){
      this.clusterService.ct_img = this.ct_img;

      this.clusterService.uploadImg().subscribe(
        res => {
          if(this.appSetting.isDebuging)
            console.log(res.filename);
            
          this.ct_img_name = res.filename;
          this.canUpload = false;
          this.isUploaded = true;
        }, error => console.error(error)
      );
    }
  }

  deleteImage(){
    if(this.isUploaded){
      this.clusterService.ct_img = this.ct_img_name;
      this.clusterService.deleteImg().subscribe(
        res => {
          this.isUploaded = false;
          this.canUpload = true;
          this.ct_img_preview = null;
          this.ct_img_name = null;
          if(this.appSetting.isDebuging)
            console.log(this.ct_img_preview);
        }, err => console.log(err)
      );
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
    if(this.appSetting.isDebuging)
      console.log(data);

    this.ct_id = data.ct_id;
    this.ct_sequence = data.ct_sequence;
    this.ct_name_th = data.ct_name_th;
    this.ct_name_en = data.ct_name_en;
    this.ct_color = data.ct_color_code;
    this.ct_img_url = data.ct_img;

    this.sm_sys_id = data.sys_id;

    this.canUpload = false;
    this.isUploaded = true;

    element.style.color = this.ct_color.toString();
  }

  deleteCluster(index, ct_id){
    confirm(`Want to delete cluster "${this.clustersData[index].ct_name_th}" ?`);
    this.clusterService.ct_id = ct_id;
    this.clusterService.delete().subscribe(
      res => {
        this.clustersData.splice(index, 1);
        if(this.appSetting.isDebuging)
          console.log(`${ct_id} is deleted!`);
      }, err => console.error(err)
    );
  }

  closeModal(){
    this.ct_id = null;
    this.ct_sequence = null;
    this.ct_name_th = null;
    this.ct_name_en = null;
    this.ct_color = "#";
    this.ct_img_url = null;

    this.sm_sys_id = null;

    // if(this.ct_img_preview == null){
    //   this.clearUploadField();
    // }else{
    //   this.ct_img_preview = null;
    // }
  }

  private clearUploadField(): void {
    (<HTMLInputElement>window.document.getElementById('imgUpload'))
    .value = null;
  }

}
