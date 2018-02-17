import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-driven-debug',
  templateUrl: './template-driven-debug.component.html',
  styleUrls: ['./template-driven-debug.component.css']
})
export class TemplateDrivenDebugComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() { }

}
