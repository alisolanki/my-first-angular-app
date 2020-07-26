import { Component } from '@angular/core';

@Component({
    selector: '[app-success]',
    templateUrl: './success.component.html',
    styles:[`
        div{
            padding: 18px;
        }
    `]
})
export class SuccessComponent {
    success = "Success";
}