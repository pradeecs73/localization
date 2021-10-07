import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-dynamiccomponent',
  templateUrl: './dynamiccomponent.component.html',
  styleUrls: ['./dynamiccomponent.component.css']
})
export class DynamiccomponentComponent implements OnInit {

  constructor() { }

  @Input() inputmessage:any;

  ngOnInit(): void {
  }

}
