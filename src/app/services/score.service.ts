import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  sc_id: any;
  sc_ct_id: any;
  sc_score: any;

  us_id: any;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  vote(): Observable<any>{
    let data = { "us_id": this.us_id, "sc_score": this.sc_score, "ct_id": this.sc_ct_id };
    return this.http.post(this.appSetting.apiURL+'/vote', data);
  }

  getScore(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/score');
  }
}
