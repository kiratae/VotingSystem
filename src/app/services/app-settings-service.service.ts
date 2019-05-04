import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsServiceService{

  apiURL: String = "http://127.0.0.1:3000";

  isDebuging: boolean = true;

  lang = "TH";

  constructor(private http: HttpClient) {}

  public getTH(): Observable<any> {
    return this.http.get("./assets/lang/th.json");
  }

  public getEN(): Observable<any> {
    return this.http.get("./assets/lang/en.json");
  }

}
