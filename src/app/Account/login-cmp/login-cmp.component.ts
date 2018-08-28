import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm }   from '@angular/forms';
import { Route, Router }   from '@angular/router';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.css'],
  
})
export class LoginCmpComponent implements OnInit {

  login = new login();
  constructor(private router: Router) { }

  ngOnInit() {        
  }

  onSubmit(f: NgForm) {
    
    if(this.login.UserName =="Tushar" && this.login.Password == "Password")
      {
        this.login.UserName = "Tushar1";
        this.router.navigate(['dashboard']);        
      }
      return true;
  }
}

export class login {
  UserName = "Tushar";
  Password = "Password";
}
