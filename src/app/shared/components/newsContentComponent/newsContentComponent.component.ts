import { Component, Input } from '@angular/core';

@Component({
    selector:'app-newsContentComponent',
    templateUrl:'./newsContentComponent.component.html',
    styleUrls:['./newsContentComponent.component.css']
})
export class NewsContentComponent{

    @Input() image:string;
    @Input() title:string;
    @Input() author:string;
    @Input() time:string;
    @Input() moreInfo:string;
    @Input() miniMiddleRightCard:boolean;
    @Input() majorCard:boolean;
    @Input() miniLeftCard:boolean;
    @Input() miniMiddleCard:boolean;
    @Input() miniRightCard:boolean;

    openMoreInfo(){
        window.open(this.moreInfo);
    }

}