import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',component:WeatherSearchComponent},
  {path:'pressure',component:PressureComponent},
  {path:'main',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
