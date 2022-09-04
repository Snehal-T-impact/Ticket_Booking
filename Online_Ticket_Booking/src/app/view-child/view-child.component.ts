import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    this.nil.nativeElement.style.backgroundColor = 'blue';
  }
  @ViewChild('temp')
  nil!: ElementRef;
  ngOnInit(): void {}
}
