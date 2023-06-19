import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/crud.service';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit{
data1={}

  constructor(
    private crudService: CrudService,private sharedService: SharedService,private router: Router
  ) { }

  city: string = '';
  ngOnInit(): void {
  }

  searchWeather(){

     this.crudService.GetWeather({ "cityName":this.city}).subscribe(
      (res)=>{
        this.data1=res
        if(res=="city not found"){
          alert("Please enter valid city name")
        }else{
        this.sharedService.setWeatherData(res);
        this.router.navigateByUrl('main');
        }

      }
    )

    }

}
