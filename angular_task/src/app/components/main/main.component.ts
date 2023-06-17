import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data!: any;
  backgroundClass!: string;
  srcm!:string


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.data = this.sharedService.getWeatherData();
    console.log("this is",this.data.City)
    if(this.data.City==undefined){
      alert("Please enter valid city name")

    }else{
    this.setBackgroundClass();
    }

  }
  private setBackgroundClass(): void {
    // Based on your response value, set the appropriate background class
    if (this.data.Weather=== 'Clouds') {
      this.srcm = '../../../assets//clouds.mp4';
    } else if (this.data.Weather === 'Clear') {
      this.srcm = '../../../assets//normal.mp4';
    } else if(this.data.Weather === 'Rain'){
      this.srcm = '../../../assets//pexels-joel-dunn-3535854-1920x1080-30fps.mp4';
    }
    else {
      this.srcm = '../../../assets//sunny.mp4';
    }
  }
}
