import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public us_id: String;
  public us_username: String;
  public us_password: String;
  public us_lastlogin: String;
  public us_ut_id: Number;

  public um_points: Number;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) {}

  login(): Observable<any>{
    let data = { 'us_username': this.us_username, 'us_password': this.us_password };
    return this.http.post(this.appSetting.apiURL + '/users/login', data);
  }

  loginCompleted(): Observable<any>{
    let data = { 'us_id': this.us_id };
    return this.http.put(this.appSetting.apiURL+'/users/logged_in', data);
  }

  insert(): Observable<any>{
    let data = { 'us_username': this.us_username, 'us_password': this.us_password, 'us_ut_id': this.us_ut_id, 'um_points': this.um_points };
    return this.http.post(this.appSetting.apiURL+'/users', data);
  }

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/users');
  }

  getByKey(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/users/'+this.us_id);
  }

  getLogs(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/users/logs/'+this.us_id);
  }

  delete(): Observable<any>{
    return this.http.delete(this.appSetting.apiURL+'/users/'+this.us_id);
  }

}
