import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import {RequestsComponent} from './requests/requests.component';
import {BlogComponent} from './blog/blog.component';
import {FriendsComponent} from './friends/friends.component';
import {SearchComponent} from './search/search.component';
import {ChessRequestsComponent} from './chess-requests/chess-requests.component'
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'requests', component: RequestsComponent,canActivate: [AuthGuard]},
  {path: 'blog', component: BlogComponent},
  {path: 'friends', component: FriendsComponent,canActivate: [AuthGuard]},
  {path: 'search/:username', component: SearchComponent,canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent,canActivate: [AuthGuard]},
  {path: 'chessRequests', component: ChessRequestsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
