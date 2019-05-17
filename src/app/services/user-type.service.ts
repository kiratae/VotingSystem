import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  public ut_id: String;
  public ut_name_th: String;
  public ut_name_en: String;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) {}

  getAll(): Observable<any>{
    return this.http.get(this.appSetting.apiURL+'/user_type');
  }

  insert(): Observable<any>{
    let data = {
      "ut_name_th": this.ut_name_th,
      "ut_name_en": this.ut_name_en
    }
    return this.http.post(this.appSetting.apiURL+'/user_type', data);
  }

  update(): Observable<any>{
    let data = {
      "ut_id": this.ut_id,
      "ut_name_th": this.ut_name_th,
      "ut_name_en": this.ut_name_en
    }
    return this.http.put(this.appSetting.apiURL+'/user_type', data);
  }

  delete(): Observable<any>{
    return this.http.delete(this.appSetting.apiURL+'/user_type/'+this.ut_id);
  }

}
