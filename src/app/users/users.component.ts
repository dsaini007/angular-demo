import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../usersapi.service';
declare let $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata: any;

  constructor(private api:UsersapiService) { }

  ngOnInit(): void {
    this.getdata();
    $(document).ready(function() {
      $('#example').DataTable();
  } );
  }
  getdata(){
    this.api.getallData().subscribe((res: any) => {
      this.userdata = res.data;
     
      
    });
  }
}
