import {Component , Output,EventEmitter , OnInit, Input} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
    selector: 'some-comp',
    template: `
        <h1>Some component</h1>
        <input type="text" [value]="value" #msg (keyup)= "changeText(msg.value)"/>
        <button (click)="changeMessage()">Click </button>
        <h2> OBSERVABLE : </h2> <p>{{observerMsg}} </p>
        <h3> P-C ::::: {{staticString}} </h3>
    `
})
export class SomeComponent implements OnInit{
    message: string = "Random message";
    value: string = "";
    observerMsg: string= "";

    @Input() staticString: string ;

    @Output() messageEvent = new EventEmitter<string>();

    constructor(private ds: DataService) {
    }

    ngOnInit() {
        this.ds.currentMessage.subscribe(message => { console.log("inside some component") ; this.observerMsg = message });
    }

    changeMessage(){ 
        this.message = this.value;
        this.messageEvent.emit(this.message);
        this.ds.changeMessage(this.value);
        console.log(this.message);
    }

    changeText(value: string){
        this.value = value;
    }
}