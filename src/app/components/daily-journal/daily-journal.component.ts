import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-journal',
  templateUrl: './daily-journal.component.html',
  styleUrls: ['./daily-journal.component.css']
})
export class DailyJournalComponent implements OnInit {
  currentTime: string='';
  entryType: string = 'Text Journey';
  mood: string = 'Happy';
  mindScore: number = 85;
  positiveHighlights: string[] = [
    'Had a great workout session',
    'Finished reading a book',
    'Spent quality time with family'
  ];

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  addJournalEntry() {
    // Logic to add a new journal entry for other dates
    console.log('Add Journal Entry button clicked');
  }
}