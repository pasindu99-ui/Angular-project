import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  @Input() results:any

  constructor() { }

  ngOnInit() {
  }

}
