import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserI } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public id!: string;
  public user!: UserI;

  constructor(private aRoute: ActivatedRoute, private _service: UserService) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._service.getOneUser(this.id).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
