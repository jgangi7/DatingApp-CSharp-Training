import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({ positionClass: 'toast-bottom-right' }),
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NavComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    MessagesComponent,
    ListsComponent,
  ],
})
export class AppModule {}
