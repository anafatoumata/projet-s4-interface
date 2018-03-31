import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: number;
    @Input() data: string;
    @Output() getIdToDelete = new EventEmitter();
    @Output() getIdToEdit = new EventEmitter();

    Counter = 0;

    delete() { // You can give any function name
        //When delete() button is clicked getId gets called and emit the value of this.label
        //as an event the config componenet intercept this event

        this.getIdToDelete.emit(this.label);

    }

    edit () {

        this.getIdToEdit.emit(this.label);
    }



    constructor() {}

    ngOnInit() {}
}