import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserDetails = <any>{};

constructor(private _auth:AuthService, 
  private _router:Router, private fb:FormBuilder) { }

  loginForm = this.fb.group(
    {
      email: ['', Validators.required,
      [Validators.pattern('')]],
      password: ['', Validators.required,
      [Validators.minLength(6)]]
    }
  )

loginUser()
{
  this._auth.loginUser(this.loginUserDetails)
  .subscribe(
    res =>{
      console.log(res),
      localStorage.setItem('token', res['token']);
      this._router.navigate(['/special'])

    },
    err=>console.log(err)
  )
}
  ngOnInit(): void {
    
  }

}
