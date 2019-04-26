import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  isSubmitted = false
  isLogin = 0

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("us_id") != null){
      this.router.navigate(['home'])
    }

    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.isSubmitted = true
    this.isLogin = 0
    if(this.loginForm.invalid){
      this.isLogin = 0
      return;
    }

    const md5 = new Md5();
    var username = this.loginForm.get("username").value;
    var password = this.loginForm.get("password").value;
    var hashPassword = md5.appendStr(password).end().toString();

    this.usersService.us_username = username;
    this.usersService.us_password = hashPassword;

    this.usersService.login().subscribe(
      (res: any) => {
        let canLogin = false
        let loginData = res['data'][0];

        console.log(loginData);

        if(loginData['canLogin'] == "true"){

          this.usersService.us_id = loginData['us_id'];
          this.usersService.loginCompleted().subscribe((res) => {

            let userType = loginData['ut_name_en'];
            let userID = loginData['us_id'];

            sessionStorage.setItem("us_id", userID);
            sessionStorage.setItem("user_type", userType);

            if(userType == "Admin"){
              this.router.navigate(['admin'])
            }else{
              this.router.navigate(['home'])
            }

            
            this.isLogin = 1

          },
          err => {
            alert("Conection Error!");
            console.log(err);
          });
        }else{
          this.isLogin = -1
        }

      },
      err => console.log(err)
    )

  }

}
