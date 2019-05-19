import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  se_id;
  se_name;
  se_details;
  se_values;

  ct_id;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/scrum/events');
  }

  getHistory(): Observable<any>{
    let data = {
      "ct_id": this.ct_id
    }
    return this.http.post(this.appSetting.apiURL+'/scrum/history',data);
  }

  insert(): Observable<any>{
    let data = {
      "se_name": this.se_name,
      "se_details": this.se_details,
      "se_values": this.se_values,
    }
    return this.http.post(this.appSetting.apiURL+'/scrum/events', data);
  }

  update(): Observable<any>{
    let data = {
      "se_id": this.se_id,
      "se_name": this.se_name,
      "se_details": this.se_details,
      "se_values": this.se_values,
    }
    return this.http.put(this.appSetting.apiURL+'/scrum/events', data);
  }

  delete(): Observable<any>{
    return this.http.delete(this.appSetting.apiURL+'/scrum/events/'+this.se_id);
  }

}
