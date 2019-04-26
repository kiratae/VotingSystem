import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  usersData: Array<any>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe((res) => {
      console.log(res);
      this.usersData = res['data'];
    })
  }

  deleteUser(index, us_id){
    var dialog = confirm(`It will delete user "${this.usersData[index].us_username}" from database.\nAre you sure?`);
    if (dialog == true) {
      this.usersService.us_id = us_id;
      this.usersService.delete().subscribe(
        res => {
          this.usersData.splice(index, 1);
        },
        error => console.log(error)
      );
    } else {
      return;
    }
  }

  

}
