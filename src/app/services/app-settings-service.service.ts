import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsServiceService{

  apiURL: String = "http://192.168.1.13:3000"; // http://localhost:3000
  secretKey: String = "l3ear@Hunt;"

  isDebuging: boolean = false;

  lang = "TH";

  chartRefreshTime = 5000; // miliseconds

  canStillLoginTime = 10 * 60 * 1000; // minutes x seconds in minutes x miliseconds

  constructor(private http: HttpClient) {}

  public getTH(): Observable<any> {
    return this.http.get("./assets/lang/th.json");
  }

  public getEN(): Observable<any> {
    return this.http.get("./assets/lang/en.json");
  }

  getTimeSync(){
    return this.http.get(this.apiURL+"/timesync");
  }

}
