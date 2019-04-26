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

}
