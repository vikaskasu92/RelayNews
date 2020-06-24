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
    @Input() miniCard:boolean;

    openMoreInfo(event:any){
        event.preventDefault();
        window.open(this.moreInfo);
    }

}