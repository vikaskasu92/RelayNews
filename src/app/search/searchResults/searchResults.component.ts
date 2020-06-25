import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { MoreNewsDialog } from 'src/app/shared/dialogs/moreNewsDialog/moreNewsDialog.component';

@Component({
    selector:'app-searchResults',
    templateUrl:'./searchResults.component.html',
    styleUrls:['./searchResults.component.css']
})
export class SearchResultsComponent implements OnInit{

    constructor(private commonService:CommonService,
        private matDialog:MatDialog,){}

    @Input() image:string;
    @Input() title:string;
    @Input() author:string;
    @Input() time:string;
    @Input() moreInfo:string;
    @Input() abstract:string;
    @Input() moreNewsDialog:boolean;
    @Input() innerDialogCard:boolean;
    imageExist:boolean = false;
    
    ngOnInit(){
        if(this.image === undefined){
            this.imageExist = true;
        }
    }

    openMoreInfo(event:any){
        event.preventDefault();
        window.open(this.moreInfo);
    }
    
    openMoreInfoOnDialog(){
        if(!this.innerDialogCard){
            const data = {url:this.image,title:this.title,author:this.author,time:this.time,abstract:this.abstract,moreInfo:this.moreInfo};
            const dialogRef = this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }
    }
    

}