import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-view-childern',
  templateUrl: './view-childern.component.html',
  styleUrls: ['./view-childern.component.css'],
})
export class ViewChildernComponent implements OnInit, AfterViewInit {
  @ViewChildren('ping') pong!: QueryList<any>;
  ppp: any=[];
  constructor() {}
  ngAfterViewInit() {
    this.pong.first.nativeElement.style.color = 'pink';
    this.pong.last.nativeElement.style.color = 'blue';
    this.ppp = this.pong.toArray();
    console.log('resylt', this.ppp.length);
    this.ppp[2].nativeElement.style.color="red"
    this.ppp[3].nativeElement.style.color="green"
    this.ppp[4].nativeElement.style.color="orange"

  }

  ngOnInit(): void {}
}
