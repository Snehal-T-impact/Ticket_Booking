import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() data:any;
DataFromChild:any='Nilesh T'
@Output()myEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.myEvent.emit(this.DataFromChild);
  }
}
