import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {
  

  constructor(private http:HttpClient) { }
  senddata(data:any){
    return this.http.post(environment.baseUrl +'user/add', data)
  }
 
  getallData(){
    return this.http.get(environment.baseUrl +'user/getalldata');
  }
}
