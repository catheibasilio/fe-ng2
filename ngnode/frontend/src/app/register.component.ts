import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title><h2>Register New User</h2></mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form>
          <mat-form-field>
            <input [(ngModel)]="registerData.email"  matInput  name="email" placeholder="email">
          </mat-form-field>
          <mat-form-field>
            <input [(ngModel)]="registerData.pwd" name="pwd" matInput name="pwd" placeholder="password" type="password">
          </mat-form-field>
          <button (click)="post()" mat-raised-button color="primary">Register</button>
        </form>
    </mat-card-content>
    </mat-card>
  `
})
export class RegisterComponent {
  registerData = {}

  constructor( private apiService: ApiService) {}

  post() {
    console.log(this.registerData);
    this.apiService.sendUserRegistration(this.registerData)
  }
}
