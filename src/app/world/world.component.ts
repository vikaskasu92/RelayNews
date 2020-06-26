import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { NewsContent } from '../shared/models/newsContent.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';
import { CommonService } from '../shared/common.service';

@Component({
    selector:'app-world',
    templateUrl:'./world.component.html',
    styleUrls:['./world.component.css']
})
export class WorldComponent{

    constructor(private newsDataService:NewsDataService,
                private matDialog:MatDialog,
                private commonService:CommonService){}

    newsContents1:NewsContent[];
    newsContents2:NewsContent[];
    moreNewsContents1:NewsContent[];
    moreNewsContents2:NewsContent[];
    moreNewsContents3:NewsContent[];
    even:boolean;
    odd:boolean;
    first:boolean;
    second:boolean;
    third:boolean;
    mainNewsType:string = 'World';
    dialogRef: MatDialogRef<unknown, any>;
    showMostViewed:boolean = false;
    breadCrumbClick:boolean;

    ngOnInit(){
        scrollTo(0,0);
        this.loadingSpinner();
        this.breadCrumbClick = false;
        this.searchRelatedNews('world');
    }

    loadingSpinner(){
        this.dialogRef = this.commonService.openDialog(this.matDialog,LoadingDialog,null);
    }

    searchRelatedNews(searchValue:string){
        if(this.breadCrumbClick){
            this.loadingSpinner();
        }
        this.breadCrumbClick = true;
        let date = this.commonService.calculateTodayDate();
        this.newsDataService.retrieveNews(searchValue).subscribe( response =>{
            this.commonService.prePopulateNews(response, 'world');
            this._initializeNews();
            this.showMostViewed = true;
            this.dialogRef.close();
        },reject =>{

        });
    }

    private _initializeNews(){
        this.newsContents1 = this.commonService.newsContents1;
        this.newsContents2 = this.commonService.newsContents2;
        this.moreNewsContents1 = this.commonService.moreNewsContents1;
        this.moreNewsContents2 = this.commonService.moreNewsContents2;
        this.moreNewsContents3 = this.commonService.moreNewsContents3;
    }

    

}