import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularhttp';
  
  constructor(private useService: UserService){ }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.useService.getUsers().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
