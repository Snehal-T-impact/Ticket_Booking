import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor() { }
mausami:any="She is not well"
getData(){
  console.log("from one compoenent", this.mausami)
  return this.mausami;
}
  ngOnInit(): void {
  }

}
