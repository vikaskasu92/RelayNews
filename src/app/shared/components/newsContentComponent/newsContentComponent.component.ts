import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { MoreNewsDialog } from '../../dialogs/moreNewsDialog/moreNewsDialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector:'app-newsContentComponent',
    templateUrl:'./newsContentComponent.component.html',
    styleUrls:['./newsContentComponent.component.css']
})
export class NewsContentComponent implements OnInit{

    constructor(private commonService:CommonService,
                private matDialog:MatDialog,){}

    @Input() image:string;
    @Input() title:string;
    @Input() author:string;
    @Input() time:string;
    @Input() moreInfo:string;
    @Input() abstract:string;
    @Input() miniMiddleRightCard:boolean;
    @Input() majorCard:boolean;
    @Input() miniLeftCard:boolean;
    @Input() miniMiddleCard:boolean;
    @Input() miniRightCard:boolean;
    @Input() miniCard:boolean;
    @Input() moreNewsDialog:boolean;
    @Input() innerDialogCard:boolean;
    imageExist:boolean = false;

    ngOnInit(){
        if(this.image === undefined){
            this.imageExist = true;
            console.log("image not found");
        }
    }

    openMoreInfo(event:any){
        event.preventDefault();
        window.open(this.moreInfo);
    }

    openMoreInfoOnDialog(){
        if(this.moreNewsDialog === false || this.moreNewsDialog != undefined){
            const data = {url:this.image,title:this.title,author:this.author,time:this.time,abstract:this.abstract,moreInfo:this.moreInfo};
            const dialogRef = this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }
    }

}