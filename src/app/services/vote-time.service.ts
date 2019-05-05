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

  getAll(){
    return this.http.get(this.appSetting.apiURL+'/vote_time');
  }

  
}
