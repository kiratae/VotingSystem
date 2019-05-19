import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsServiceService{

  // apiURL: String = "http://10.80.39.252:3000"; // http://localhost:3000
  apiURL: String = "http://localhost:3000"; // http://localhost:3000
  secretKey: String = "l3ear@Hunt;" // secret key

  isDebuging: boolean = false; // use to open/close console log

  lang = "TH"; // lang to use have "EN" is English , "TH" is Thai

  chartRefreshTime = 5000; // miliseconds

  canStillLoginTime = 10 * 60 * 1000; // minutes x seconds in minutes x miliseconds

  constructor(private http: HttpClient) {}

  /*
  * getTH
  * get thai string values from json file
  */
  public getTH(): Observable<any> {
    return this.http.get("./assets/lang/th.json");
  }

  /*
  * getEN
  * get english string values from json file
  */
  public getEN(): Observable<any> {
    return this.http.get("./assets/lang/en.json");
  }

  /*
  * getTimeSync
  * get server time
  */
  getTimeSync(){
    return this.http.get(this.apiURL+"/timesync");
  }

}
