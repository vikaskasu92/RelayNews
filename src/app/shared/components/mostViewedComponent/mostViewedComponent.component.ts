import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../../newsData.service';
import { CommonService } from '../../common.service';
import { MatDialog } from '@angular/material/dialog';
import { MoreNewsDialog } from '../../dialogs/moreNewsDialog/moreNewsDialog.component';

@Component({
    selector:'app-mostViewedComponent',
    templateUrl:'./mostViewedComponent.component.html',
    styleUrls:['./mostViewedComponent.component.css']
})
export class MostViewedComponent implements OnInit{

    constructor(private newsDataService:NewsDataService,
                private commonService:CommonService,
                private matDialog:MatDialog){}

    mostWatched1:string;
    mostWatched2:string;
    mostWatched3:string;
    mostWatched4:string;
    mostWatched5:string;

    ngOnInit(){
        this.retrieveMostWatchedNews();
    }

    retrieveMostWatchedNews(){
        this.newsDataService.retrieveMostViewedNews().subscribe( response =>{
            this.commonService.populateMostWatchedNews(response);
            this.mostWatched1 = this.commonService.mostWatched1[0];
            this.mostWatched2 = this.commonService.mostWatched2[0];
            this.mostWatched3 = this.commonService.mostWatched3[0];
            this.mostWatched4 = this.commonService.mostWatched4[0];
            this.mostWatched5 = this.commonService.mostWatched5[0];
        },reject =>{

        });
    }

    mostWatchedValue(number:number){
        if(number == 1){
            const data = {title:this.commonService.mostWatched1[0],author:this.commonService.mostWatched1[1],url:this.commonService.mostWatched1[2],time:this.commonService.mostWatched1[3],moreInfo:this.commonService.mostWatched1[4],abstract:this.commonService.mostWatched1[5]};
            this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }else if(number == 2){
            const data = {title:this.commonService.mostWatched2[0],author:this.commonService.mostWatched2[1],url:this.commonService.mostWatched2[2],time:this.commonService.mostWatched2[3],moreInfo:this.commonService.mostWatched2[4],abstract:this.commonService.mostWatched2[5]};
            this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }else if(number == 3){
            const data = {title:this.commonService.mostWatched3[0],author:this.commonService.mostWatched3[1],url:this.commonService.mostWatched3[2],time:this.commonService.mostWatched3[3],moreInfo:this.commonService.mostWatched3[4],abstract:this.commonService.mostWatched3[5]};
            this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }else if(number == 4){
            const data = {title:this.commonService.mostWatched4[0],author:this.commonService.mostWatched4[1],url:this.commonService.mostWatched4[2],time:this.commonService.mostWatched4[3],moreInfo:this.commonService.mostWatched4[4],abstract:this.commonService.mostWatched4[5]};
            this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }else{
            const data = {title:this.commonService.mostWatched5[0],author:this.commonService.mostWatched5[1],url:this.commonService.mostWatched5[2],time:this.commonService.mostWatched5[3],moreInfo:this.commonService.mostWatched5[4],abstract:this.commonService.mostWatched5[5]};
            this.commonService.openDialog(this.matDialog,MoreNewsDialog,data);
        }
    }

}