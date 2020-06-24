import { Component, Input } from '@angular/core';

@Component({
    selector:'app-componentHeading',
    templateUrl:'./componentHeading.component.html',
    styleUrls:['./componentHeading.component.css']
})
export class ComponentHeadingComponent{

    @Input() mainNewsType:string;
    @Input() newsType:string;

}