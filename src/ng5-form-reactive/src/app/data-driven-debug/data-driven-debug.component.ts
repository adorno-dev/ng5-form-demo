import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-driven-debug',
  templateUrl: './data-driven-debug.component.html',
  styleUrls: ['./data-driven-debug.component.css']
})
export class DataDrivenDebugComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
