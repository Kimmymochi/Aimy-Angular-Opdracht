import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './Components/chart/chart.component';
import { TestComponent } from './Components/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/reporting', pathMatch: 'full'},
  { path: 'reporting', component: ChartComponent},

  { path: '**', component: TestComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
