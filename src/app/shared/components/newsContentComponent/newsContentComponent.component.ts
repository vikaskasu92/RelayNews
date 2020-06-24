import { Component, Input } from '@angular/core';
import { CommonService } from '../../common.service';
import { MoreNewsDialog } from '../../dialogs/moreNewsDialog/moreNewsDialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector:'app-newsContentComponent',
    templateUrl:'./newsContentComponent.component.html',
    styleUrls:['./newsContentComponent.component.css']
})
export class NewsContentComponent{

    constructor(private commonService:CommonService,
                private matDialog:MatDialog,){}

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

    openMoreInfoOnDialog(){
        const data = {};
        const dialogRef = this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
    }

}