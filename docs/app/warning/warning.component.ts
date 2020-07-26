import { Component } from '@angular/core';

@Component({
    selector: '[app-warning]',
    templateUrl: './warning.component.html',
    styles:[`
        div{
            padding: 18px;
        }
    `]
})
export class WarningComponent {
    disabledbtn = true;
    addon = "";
    warning =  "Danger";
    constructor(){
        setTimeout(() => {
            this.disabledbtn = false;
        }, 2000);
    }

    ngOnInit() {}

    onWarningClick(){
        this.disabledbtn = true;
        this.addon = "Professional";
        this.warning = "Disabled";
    }
}