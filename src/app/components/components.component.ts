import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  showScanner = false;
  showForm = false;
  showResults = true;
  feelingText = '';
  mindScore = 0;

 
  constructor(private router: Router, private authService: AuthService) {
 

    this.authService.getUsers().subscribe(
      (response: any) => {
        console.log('User details posted successfully:', response);
      },
      (error) => {
        console.error('Failed to post user details:', error);
      }
    );
  
  }


  selectOption(option: string) {
    if (option === 'scanFace') {
      this.showScanner = true;
    } else if (option === 'fillForm') {
      this.showForm = true;
    }
  }

  submitScan() {
    this.showScanner = false;
    this.showResults = true;
    this.mindScore = this.calculateMindScore();
  }

  submitForm() {
    this.showForm = false;
    this.showResults = true;
    this.mindScore = this.calculateMindScore();
  }

  calculateMindScore(): number {
  
    return Math.floor(Math.random() * 100);
  }

  navigateToEmotionComponent() {
    this.router.navigate(['/emotion']);
  }

  navigateToJournalComponent(){
    this.router.navigate(['/daily-journal']);
  }
}