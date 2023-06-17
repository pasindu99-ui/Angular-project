import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { TemparatureComponent } from './components/Temparature/Temparature.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherSearchComponent,
    FooterComponent,
    HumidityComponent,
    TemparatureComponent,
    PressureComponent,
    MainComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
