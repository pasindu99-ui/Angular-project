import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent implements OnInit {

  @Input() results:any

  constructor() { }

  ngOnInit() {
  }

}
