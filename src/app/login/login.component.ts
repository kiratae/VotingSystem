import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
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

  oldInputUsername = '';
  oldInputPassoword = '';

  // String
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
    if(sessionStorage.getItem('us_id') != null){
      const lastLogin = parseInt(sessionStorage.getItem('last_login'));
      const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
      const now = new Date(toDayString).getTime();
      if (now - lastLogin < this.appSetting.canStillLoginTime){
        const userType = sessionStorage.getItem('user_type');
        if(userType === 'Admin'){
          this.router.navigate(['admin']);
        } else if(userType === 'Scum Master') {
          this.router.navigate(['scrum']);
        } else{
          this.router.navigate(['home']);
        }
      }
    } else {
      // this.router.navigate(['login'])

      this.loginForm = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
      
    }

    switch(this.appSetting.lang) {
      case 'EN':
        this.appSetting.getEN().subscribe(
          res => {
            this.setText(res.login_section);
          }, error => console.error(error)
        );
        break;
      case 'TH':
      this.appSetting.getTH().subscribe(
        res => {
          this.setText(res.login_section);
        }, error => console.error(error)
      );
      break;
    }

  }

  setText(langData) {
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

  onkeyup() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;

    if(this.oldInputUsername === username && this.oldInputPassoword === password){
      this.isSubmitted = true;
      return;
    }

    this.isSubmitted = false;

  }

  onSubmit() {
    this.isSubmitted = true;
    this.isLogin = 0;
    if(this.loginForm.invalid) {
      this.isLogin = 0;
      return;
    }

    this.isLoading = true;

    const md5 = new Md5();
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    let hashPassword = md5.appendStr(password).end().toString();

    this.oldInputUsername = username;
    this.oldInputPassoword = password;

    this.usersService.us_username = username;
    this.usersService.us_password = hashPassword;

    this.usersService.login().subscribe(
      (res: any) => {
        console.log(res);
        // return;

        // exit function if hot have any return data!
        if(res.data.length == 0){
          this.isLogin = -1;
          return;
        }

        this.isLoading = false;
        const can_login = false;
        const loginData = res.data[0];

        //console.log(res.data[0]);
        //console.log('----------------------------------------')

        if (this.appSetting.isDebuging) {
          console.log('login data', loginData);
        }

        if (loginData.can_login == true) {

          this.usersService.us_id = loginData.us_id;
          this.usersService.loginCompleted().subscribe((res) => {

            const userType = loginData.ut_name_en;
            const userID = loginData.us_id;

            sessionStorage.setItem('us_id', userID);
            sessionStorage.setItem('user_type', userType);

            const toDayString = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', '+0700');
            const nowLastLogin = new Date(toDayString).getTime().toString();

            sessionStorage.setItem('last_login', nowLastLogin);

            if (userType === 'Admin'){
              this.router.navigate(['admin']);
            } else if (userType === 'Scum Master') {
              this.router.navigate(['scrum']);
            } else {
              this.router.navigate(['home']);
            }

            this.isLogin = 1;

          },
          err => {
            // alert("Conection Error!");
            this.isConnectionError = true;
            this.isLoading = false;
            console.error(err);
          });
        } else {
          this.isLogin = -1;
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
