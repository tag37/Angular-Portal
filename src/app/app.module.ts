import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AccountCmpComponent } from './account/account-cmp/account-cmp.component';
import { LoginCmpComponent } from './account/login-cmp/login-cmp.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountDemoComponent } from './account-demo/account-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    AccountCmpComponent,
    LoginCmpComponent,
    AccountDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginCmpComponent,
      },
      {
         path: 'dashboard',
         component: AccountCmpComponent         
      },
      {
        path: 'login',
        component: LoginCmpComponent
     },
     {
       path:'demo',
       component: AccountDemoComponent
     }

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
