import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-Temparature',
  templateUrl: './Temparature.component.html',
  styleUrls: ['./Temparature.component.css']
})
export class TemparatureComponent implements OnInit {

  city: string | undefined
  @Input() results: any

  constructor() { }

  ngOnInit() {
  }
  

}
