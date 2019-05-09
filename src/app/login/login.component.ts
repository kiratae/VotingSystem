import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UsersService } from 'src/app/services/users.service'
import { AppSettingsServiceService } from 'src/app/services/app-settings-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  isLogin = 0;
  isConnectionError = false;
  isLoading = false;

  //String
  loginText;
  usernameText;
  passowrdText;
  errorUsernamePasswordRequireText;
  errorUsernameRequire;
  errorPasswordRequire;
  errorIncorrectLogin;
  errorConnection;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private appSetting: AppSettingsServiceService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("us_id") != null){
      let lastLogin = parseInt(sessionStorage.getItem("last_login"));
      let toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
      let now = new Date(toDayString).getTime();
      if(now - lastLogin >= this.appSetting.canStillLoginTime){
        return
      }
      this.router.navigate(['home'])
    }

    switch(this.appSetting.lang){
      case "EN":
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.login_section);
          }, error => console.error(error)
        );
      break;
      case "TH":
      this.appSetting.getTH().subscribe(
        res => {
          this.setText(res.login_section);
        }, error => console.error(error)
      );
      break; 
    }

    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  setText(langData){
    this.loginText = langData.login;
    this.usernameText = langData.username;
    this.passowrdText = langData.password;
    this.errorUsernamePasswordRequireText = langData.error_username_password_require;
    this.errorUsernameRequire = langData.error_username_require;
    this.errorPasswordRequire = langData.error_password_require;
    this.errorIncorrectLogin = langData.error_incorrect_login;
    this.errorConnection = langData.error_connection;
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.isSubmitted = true
    this.isLogin = 0
    if(this.loginForm.invalid){
      this.isLogin = 0
      return;
    }

    this.isLoading = true;

    const md5 = new Md5();
    var username = this.loginForm.get("username").value;
    var password = this.loginForm.get("password").value;
    var hashPassword = md5.appendStr(password).end().toString();

    this.usersService.us_username = username;
    this.usersService.us_password = hashPassword;

    this.usersService.login().subscribe(
      (res: any) => {
        this.isConnectionError = false;
        this.isLoading = false;
        let canLogin = false;
        let loginData = res['data'][0];

        if(this.appSetting.isDebuging)
          console.log("login data",loginData);

        if(loginData['canLogin'] == "true"){

          this.usersService.us_id = loginData['us_id'];
          this.usersService.loginCompleted().subscribe((res) => {

            let userType = loginData['ut_name_en'];
            let userID = loginData['us_id'];

            sessionStorage.setItem("us_id", userID);
            sessionStorage.setItem("user_type", userType);
            
            let toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
            let nowLastLogin = new Date(toDayString).getTime().toString();

            sessionStorage.setItem("last_login", nowLastLogin);

            if(userType == "Admin"){
              this.router.navigate(['admin'])
            }else{
              this.router.navigate(['home'])
            }

            
            this.isLogin = 1

          },
          err => {
            // alert("Conection Error!");
            this.isConnectionError = true;
            this.isLoading = false;
            console.error(err);
          });
        }else{
          this.isLogin = -1
        }

      },
      err => {
        // alert("Conection Error!");
        this.isConnectionError = true;
        this.isLoading = false;
        console.error(err);
      }
    );

  }

}
