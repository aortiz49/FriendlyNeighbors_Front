import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';


@Component({
    selector: 'app-spacer',
    templateUrl: './spacer.component.html',
    styleUrls: ['./spacer.component.css']
})
/**
 * @author albayona
 */
export class SpacerComponent implements OnInit, OnChanges {

    constructor() {
    }



    isCollapsed: boolean;


    ngOnInit() {
        this.isCollapsed = true;
    }

    ngOnChanges(): void {

    }

}
