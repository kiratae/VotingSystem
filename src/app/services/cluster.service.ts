import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  public ct_id: Number;
  public ct_sequence: Number;
  public ct_name_th: String;
  public ct_name_en: String;
  public ct_img: any;
  public ct_color_code: String;
  public sm_sys_id: Number;

  constructor(private http: HttpClient, private appSetting: AppSettingsServiceService) {}

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/cluster');
  }

  uploadImg(): Observable<any>{
    const formData = new FormData();
    formData.append('ct_img', this.ct_img)
    return this.http.post(this.appSetting.apiURL+'/api/Upload', formData);
  }

  deleteImg(): Observable<any>{
    let data = { "filename": this.ct_img }
    return this.http.post(this.appSetting.apiURL+'/api/deleteImage', data);
  }

  insert(){
    let data = {
      "ct_sequence": this.ct_sequence,
      "ct_name_th": this.ct_name_th,
      "ct_name_en": this.ct_name_en,
      "ct_img": this.ct_img,
      "ct_color_code": this.ct_color_code,
      "sm_sys_id": this.sm_sys_id
    }
    return this.http.post(this.appSetting.apiURL+'/cluster', data);
  }

  update(){
    let data = {
      "ct_id": this.ct_id,
      "ct_sequence": this.ct_sequence,
      "ct_name_th": this.ct_name_th,
      "ct_name_en": this.ct_name_en,
      "ct_img": this.ct_img,
      "ct_color_code": this.ct_color_code,
      "sm_sys_id": this.sm_sys_id
    }
    return this.http.put(this.appSetting.apiURL+'/cluster', data);
  }

  getByKey(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/cluster/'+this.ct_id);
  }

  delete(): Observable<any>{
    return this.http.delete(this.appSetting.apiURL+'/cluster/'+this.ct_id);
  }

}
