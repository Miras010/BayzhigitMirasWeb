import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { TableComponent } from './table/table.component';
import { TrainersComponent } from './trainers/trainers.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ClassesComponent,
    TableComponent,
    TrainersComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
