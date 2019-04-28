import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserTypeService } from 'src/app/services/user-type.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  usersData = [];

  usersDataFromFiles = [];
  userTypeIdFromFile;
  votePointsFromFile;

  userTypesData;
  canAddToLists = true;

  manCanAddToLists = true;
  passwordLength = 6;
  manUsername;
  manPassword;
  manUserTypeId;
  manVotePoints;

  constructor(
    private router: Router, 
    private usersService: UsersService,
    private userTypeService: UserTypeService
  ) { }

  ngOnInit() {
    this.userTypeService.getAll().subscribe((res) => {
      console.log(res);
      this.userTypesData = res['data'];
      this.userTypeIdFromFile = this.userTypesData[3].ut_id;
      this.manUserTypeId = this.userTypesData[3].ut_id;
    })

  }

  fileToListsButton(){
    this.usersDataFromFiles.forEach((element, index)=>{
      var randomstring = Math.random().toString(36).slice((this.passwordLength * -1));
      let username = element;
      let password = randomstring;
      let userType = this.findUserTypeNameById(this.userTypeIdFromFile);
      let votePoints = this.votePointsFromFile;

      this.usersData.push({ "#": index+1, "username": username, "password": password, "user_type_id": this.userTypeIdFromFile, "user_type": userType, "vote_points": votePoints })
    });
  }

  manToListButton(){
    if(this.manUsername == null){
      alert("Input User Name!")
      return
    }
    if(this.manPassword == null){
      alert("Input User Password!")
      return
    }
    if(this.manUserTypeId == null){
      alert("Select User Type!")
      return
    }

    let username = this.manUsername;
    let password = this.manPassword;
    let userType = this.findUserTypeNameById(this.manUserTypeId);
    let votePoints = this.manVotePoints;
    
    this.usersData.push({ "#": this.usersData.length+1, "username": username, "password": password, "user_type_id": this.manUserTypeId, "user_type": userType, "vote_points": votePoints })

    this.manUsername = null;
    this.manPassword = null;
    this.manUserTypeId = 4;
    this.manVotePoints = null;
  }

  findUserTypeNameById(id){
    let userType: String;
    this.userTypesData.forEach(element => {
      if(element.ut_id == id){
        userType = element.ut_name_th
      }
    });
    return userType;
  }

  downloadButton(){
    this.downloadFile(this.usersData);
  }

  deleteUser(index){
    console.log(index);
    this.usersData.splice(index, 1);
  }

  deleteAllUser(){
    this.usersData = [];
  }

  saveButton(){
    if(this.usersData == null || this.usersData.length == 0 || this.usersData[0].password == undefined){
      alert("ERROR: do follow steps!\ngenerate password first !!!");
      return
    }
    
    var dialog = confirm("user data will insert into database !\n contiune?");
    if(dialog == true)
      this.usersData.forEach((e)=>{
        
        const md5 = new Md5();
        let hashPassword = md5.appendStr(e.password).end().toString();

        this.usersService.us_username = e.username;
        this.usersService.us_password = hashPassword;
        this.usersService.us_ut_id = e.user_type_id;
        this.usersService.um_points = e.vote_points;
        this.usersService.insert().subscribe((res) => {
          console.log(res);
          this.deleteAllUser();
        })
      });

  }

  downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "users.csv");
  }

  public fileChangeListener(files: FileList){

    if(files && files.length > 0) {
      let file : File = files.item(0);
      let fileType = file.name.split('.').pop()

      if(fileType != "csv"){
        alert("file type should be csv file !!");
        this.clearUploadField();
        return;
      }

      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result.toString();
        let allTextLines = csv.split(/\r|\n|\r/);
        let headers = allTextLines[0].split(',');
        
        for (let i = 0; i < allTextLines.length; i++) {
          // split content based on comma
          let data = allTextLines[i].split(',');

          if (data.length === headers.length)
            for (let j = 0; j < headers.length; j++)
              if(headers[j] == "username")
                if(i != 0)
                  this.usersDataFromFiles.push(data[j]);
        }

        if(this.usersDataFromFiles.length == 0 || this.usersDataFromFiles == null){
          alert(`not have column name "username" in file "${file.name}"`)
          this.clearUploadField();
          this.canAddToLists = true;
        }

        if(this.userTypeIdFromFile != null){
          this.canAddToLists = false;
        }

        console.log(this.usersDataFromFiles);

      }

    }
  }

  private clearUploadField(): void {
    (<HTMLInputElement>window.document.getElementById('csvUpload'))
    .value = null;
  }

  public selectUserType1ChangeListner(value){
    console.log(value);
  }

  public selectUserType2ChangeListner(value){
    console.log(value);
    this.userTypeIdFromFile = value;

    if(this.usersDataFromFiles.length != 0){
      this.canAddToLists = false;
    }else{
      this.canAddToLists = true;
    }
  }

}
