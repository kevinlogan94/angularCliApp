import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { InfoComponent } from './components/info/info.component';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'success', component: SuccessAlertComponent },
  { path: '', component: InfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
