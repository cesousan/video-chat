import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ViewChatComponent } from './chat/view-chat/view-chat.component';
import { HeaderComponent } from './header/header.component';

const routes : Routes = [
  { path: '', redirectTo: 'auth/signup', pathMatch: 'full' },
  { path: 'auth/signup', component : SignupComponent},
  { path: 'auth/signin', component : SigninComponent},
  { path: 'chat/view-chat', component : ViewChatComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

