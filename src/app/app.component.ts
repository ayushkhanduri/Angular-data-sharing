import { Component, ViewChild , AfterViewInit , ChangeDetectorRef , OnInit} from '@angular/core';
import { SomeComponent } from './other/someComponent';
import {DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. One caveat, however, is that child won’t be available until after the view has been initialized. This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(SomeComponent) child;
  title = 'app';
  msg: string = "";
  message: string = "";
  observerMsg: string = "";

  parentData: string = "Parent data";

  constructor(
    private changeDetection: ChangeDetectorRef,
    private ds: DataService){
  }

  ngOnInit() {
    this.ds.currentMessage.subscribe(message => { console.log("inside app component"); this.observerMsg = message});
  }
  ngAfterViewInit(){
    this.msg = this.child.message;
    this.changeDetection.detectChanges();
  }

  receiveMessage($event){
    this.message = $event;
  }
}
