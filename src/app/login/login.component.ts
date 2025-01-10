import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  email: string='';
  password: string='';
  newUsername: string='';
  newEmail: string='';
  newPassword: string='';
  isCreatingAccount: boolean = false;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.email, this.password).subscribe(
      (response: any) => {
      
        this.router.navigate(['/components']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  onCreateAccount() {
    this.authService.register(this.newUsername, this.newEmail, this.newPassword).subscribe(
      (response: any) => {
        // Navigate to login page on successful account creation
        this.isCreatingAccount = false;
      },
      (error) => {
        console.error('Account creation failed', error);
      }
    );
  }

  toggleForm() {
    this.isCreatingAccount = !this.isCreatingAccount;
  }
}