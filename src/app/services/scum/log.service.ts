import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  public sl_id;
  public sl_ct_id;
  public sl_se_id;
  public sl_time_stamp;

  public time;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  
  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/scum/logs');
  }

  getByRangeTime(): Observable<any>{
    let data = { time: this.time }
    return this.http.post(this.appSetting.apiURL+'/scum/all_money', data);
  }

  getByRangeTimeNow(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/scum/all_money_now');
  }

}
