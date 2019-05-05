import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteTimeService {

  public vt_id;
  public vt_start_vote;
  public vt_end_vote;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/vote_time');
  }

  update(): Observable<any>{
    let data = { "vt_start_vote": this.vt_start_vote, "vt_end_vote": this.vt_end_vote };
    return this.http.put(this.appSetting.apiURL+'/vote_time', data);
  }
  
}
