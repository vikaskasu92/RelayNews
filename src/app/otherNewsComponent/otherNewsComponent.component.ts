import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CommonService } from '../shared/common.service';
import { NewsContent } from '../shared/models/newsContent.model';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';

@Component({
    selector:'app-otherNewsComponent',
    templateUrl:'./otherNewsComponent.component.html',
    styleUrls:['./otherNewsComponent.component.css']
})
export class OtherNewsComponent implements OnInit{

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
    newsType:string = 'MOVIES';
    mainNewsType:string = 'Other News';
    dialogRef: MatDialogRef<unknown, any>;
    showMostViewed:boolean = false;
    
    ngOnInit(){
        scrollTo(0,0);
        this.loadingSpinner();
        this.populteNews();
    }
    
    loadingSpinner(){
        this.dialogRef = this.commonService.openDialog(this.matDialog,LoadingDialog,null);
    }
    
    populteNews(){
        this.newsDataService.retrieveNews('movies').subscribe(response =>{
            this.commonService.prePopulateNews(response,'movies'); 
            this._initializeNews();
            this.showMostViewed = true;
            this.dialogRef.close();
        },reject =>{
        
        });
    }
    
    fetchRelatedNews(newsType:string){
        this.loadingSpinner();
        this.newsDataService.retrieveNews(newsType).subscribe( response =>{
            if(newsType === "sundayreview"){
                this.newsType = "Sunday Review";
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