import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RemindersComponent } from './reminders/reminders.component';
import { TodoComponent } from './todo/todo.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ExpiryReminderComponent } from './expiry-reminder/expiry-reminder.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  }
  ,
  {
    path: 'purchases',
    component: PurchasesComponent
  }
  ,
  {
    path: 'stock',
    component: RemindersComponent
  }
  , 
  {
    path: 'expiry-reminder',
    component: ExpiryReminderComponent
  }
  ,
  {
    path: 'appointment',
    component: AppointmentComponent
  }
  ,
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SalesComponent,
    PurchasesComponent,
    RemindersComponent,
    TodoComponent,
    AppFooterComponent,
    ExpiryReminderComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
