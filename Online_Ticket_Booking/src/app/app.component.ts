import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OneComponent } from './one/one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  s:any;
  ngAfterViewInit(): void {
  this.s =this.myComp.getData();
  // this.pong.first.nativeElement ="yellow"
  }
  // actionName:any="weather portlet";
  info:any
  actionName:any="undefined"
  DatainParent:any ="Snehal T";
@ViewChild('tempref')myComp!:OneComponent;

  title = 'Online_Ticket_Booking';
  onEvent(info:any){
    this.info=info;
    console.log("info", info)
  }
}
