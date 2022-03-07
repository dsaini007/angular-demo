
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersapiService } from '../usersapi.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signup!: FormGroup;
  message!: string;

  constructor(private fb:FormBuilder, private api: UsersapiService   ,private router:Router) { }

  ngOnInit(): void {
    
  
    this.signup=this.fb.group({
      name:["",[Validators.required,]],
      username:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:["",[Validators.required,Validators.minLength(8)]],
      confirmpassword:["",[Validators.required]],
      gender:["",[Validators.required]],
    })
  }
  get getvalue(){
    return this.signup.controls
  }
  passwordvalidation(){
  
    if(this.signup.controls['password'].value == this.signup.controls['confirmpassword'].value){
     this.message='';
    }
    else
    {
       this.message='password not matched';
    }
  }
  submit(){
    console.log(this.signup.value)
    if(this.signup.valid && this.signup.controls['password'].value == this.signup.controls['confirmpassword'].value){
      
      this.api.senddata(this.signup.value).subscribe({
        next: (res: any) => {
          console.log('RES::::', res);
          if(res){
       alert("registerd succesufull")
    this.router.navigate(['/users'])

          }
        },
        error: (err) => {
          console.log('ERROR::::::::::::::::::::::::::::::::;;:', err);
          alert(err.error.message)
        },
        
      })
      
    }
    else{
     
      this.signup.markAllAsTouched();
    }
     
  }
  

}
