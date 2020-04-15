import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';

import {AuthGuard} from './guards/auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { RequestsComponent } from './requests/requests.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CardComponent} from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ThreestarsComponent } from './threestars/threestars.component';
import { OnestarsComponent } from './onestars/onestars.component';
import { TwostarsComponent } from './twostars/twostars.component';
import { FourstarsComponent } from './fourstars/fourstars.component';
import { FivestarsComponent } from './fivestars/fivestars.component';
import { BlogComponent } from './blog/blog.component';
import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { SearchComponent } from './search/search.component';
import { ChessRequestsComponent } from './chess-requests/chess-requests.component';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { ChatComponent } from './chat/chat.component';
import { ChatcardComponent } from './chatcard/chatcard.component';
import { ChatsendComponent } from './chatsend/chatsend.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    SafePipe,
    RequestsComponent,
    CardComponent,
    CarouselComponent,
    ThreestarsComponent,
    OnestarsComponent,
    TwostarsComponent,
    FourstarsComponent,
    FivestarsComponent,
    BlogComponent,
    FeedComponent,
    FriendsComponent,
    SearchComponent,
    ChessRequestsComponent,
    ChatComponent,
    ChatcardComponent,
    ChatsendComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxHmCarouselModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
