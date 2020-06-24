import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { NewsContent } from '../shared/models/newsContent.model';
import { CommonService } from '../shared/common.service';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
    selector:'app-businessComponent',
    templateUrl:'./businessComponent.component.html',
    styleUrls:['./businessComponent.component.css']
})
export class BusinessComponent implements OnInit{

    constructor(private newsDataService:NewsDataService,
                private commonService:CommonService,
                private matDialog:MatDialog){}

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
    newsType:string = 'Business';
    mainNewsType:string = 'Business News';
    dialogRef: MatDialogRef<unknown, any>;
    showMostViewed:boolean = false;

    ngOnInit(){
        this.loadingSpinner();
        this.populteNews();
    }

    loadingSpinner(){
        this.dialogRef = this.commonService.openDialog(this.matDialog,LoadingDialog,null);
    }

    populteNews(){
        this.newsDataService.retrieveNews('business').subscribe(response =>{
            this.commonService.prePopulateNews(response,'business'); 
            this._initializeNews();
            this.showMostViewed = true;
            this.dialogRef.close();
        },reject =>{

        });
    }

    fetchRelatedNews(newsType:string){
        this.loadingSpinner();
        this.newsDataService.retrieveNews(newsType).subscribe( response =>{
            if(newsType === "realestate"){
                this.newsType = "Real Estate";
            }else{
                this.newsType = newsType;
            }
            this.commonService.prePopulateNews(response,newsType); 
            this._initializeNews();
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