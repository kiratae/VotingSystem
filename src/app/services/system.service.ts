import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  public sys_id;
  public sys_name_th;
  public sys_name_en;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/systems');
  }

  insert(): Observable<any>{
    let data = { "sys_name_th": this.sys_name_th, "sys_name_en": this.sys_name_en };
    return this.http.post(this.appSetting.apiURL+'/systems', data);
  }

}
