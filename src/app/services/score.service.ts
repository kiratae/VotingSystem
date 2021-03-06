import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  sc_id: any;
  sc_ct_id: any;
  sc_score: any;

  us_id: any;
  vl_id: any;

  constructor(
    private http: HttpClient,
    private appSetting: AppSettingsServiceService
  ) { }

  addScore(): Observable<any> {
    const md5 = new Md5();
    const hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
    const data = { hash: hashSecretKey, us_id: this.us_id, sc_score: this.sc_score, ct_id: this.sc_ct_id };
    return this.http.post(this.appSetting.apiURL + '/add_score', data);
  }

  minusUserScore(): Observable<any> {
    const md5 = new Md5();
    const hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
    const data = { hash: hashSecretKey, us_id: this.us_id, sc_score: this.sc_score, ct_id: this.sc_ct_id };
    return this.http.post(this.appSetting.apiURL + '/minus_score', data);
  }

  createLog(): Observable<any> {
    const md5 = new Md5();
    const hashSecretKey = md5.appendStr(this.appSetting.secretKey.toString()).end().toString();
    const data = { hash: hashSecretKey, us_id: this.us_id, sc_score: this.sc_score, ct_id: this.sc_ct_id };
    return this.http.post(this.appSetting.apiURL + '/log', data);
  }

  restore_step1(): Observable<any> {
    const data = { vl_id: this.vl_id, us_id: this.us_id, sc_score: this.sc_score, sc_id: this.sc_id };
    return this.http.post(this.appSetting.apiURL + '/restore_sc', data);
  }

  restore_step2(): Observable<any> {
    const data = { vl_id: this.vl_id, us_id: this.us_id, sc_score: this.sc_score, sc_id: this.sc_id };
    return this.http.post(this.appSetting.apiURL + '/restore_um', data);
  }

  restore_step3(): Observable<any> {
    const data = { vl_id: this.vl_id, us_id: this.us_id, sc_score: this.sc_score, sc_id: this.sc_id };
    return this.http.post(this.appSetting.apiURL + '/restore_vl', data);
  }

  getScore(): Observable<any> {
    return this.http.get(this.appSetting.apiURL + '/score');
  }

  resetScore(): Observable<any> {
    return this.http.get(this.appSetting.apiURL + '/resetScore');
  }

  updateUserPoint(): Observable<any> {
    const data = { us_id: this.us_id, sc_score: this.sc_score, ct_id: this.sc_ct_id };
    return this.http.put(this.appSetting.apiURL + '/score', data);
  }

}
