import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ViewChatComponent } from './chat/view-chat/view-chat.component';
import { HeaderComponent } from './header/header.component';
import { SelfInfoComponent } from './self-info/self-info.component';
import { AuthGuard } from './services/auth-guard.service';


const routes : Routes = [
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' },
  { path: 'auth/signup',  component : SignupComponent},
  { path: 'auth/signin',  component : SigninComponent},
  { path: 'chat/view-chat', canActivate:[AuthGuard], component : ViewChatComponent},
  { path: 'self-info', canActivate:[AuthGuard], component: SelfInfoComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

