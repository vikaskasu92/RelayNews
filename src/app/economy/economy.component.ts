import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { NewsContent } from '../shared/models/newsContent.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';
import { CommonService } from '../shared/common.service';

@Component({
    selector:'app-economy',
    templateUrl:'./economy.component.html',
    styleUrls:['./economy.component.css']
})
export class EconomyComponent{

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
    newsType:string = 'US Economy';
    mainNewsType:string = 'Economy';
    dialogRef: MatDialogRef<unknown, any>;
    showMostViewed:boolean = false;
    breadCrumbClick:boolean;

    ngOnInit(){
        scrollTo(0,0);
        this.loadingSpinner();
        this.breadCrumbClick = false;
        this.searchRelatedNews('us economy');
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
        this.newsDataService.retrieveCustomSearchWithPageNumber(searchValue,date,1).subscribe( response =>{
            this.commonService.prePopulateSearchedNews(response);
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