import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: UserI[] = [];

  constructor(private _service: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._service.get().subscribe(res =>{
      this.users = res;
    })
  }

}
