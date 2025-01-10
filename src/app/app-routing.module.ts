import { ExtraOptions, RouterModule, Routes } from '@angular/router';
  import { NgModule } from '@angular/core';
  import { ComponentsComponent } from './components/components.component';
  import { EmotionComponent } from './components/emotion/emotion.component';
  import { DailyJournalComponent } from './components/daily-journal/daily-journal.component';
  import {LoginComponent} from './login/login.component';

  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'emotion', component: EmotionComponent },
    { path: 'daily-journal', component: DailyJournalComponent },
    { path: 'login', component: LoginComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
