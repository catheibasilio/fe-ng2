import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
