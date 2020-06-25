import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsContent } from '../shared/models/newsContent.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent implements OnInit{

    constructor(private common:CommonService,
                private router:Router,
                private newsDataService:NewsDataService,
                private matDialog:MatDialog){}

    mainNewsType:string = 'Search';
    searchValue:Observable<string>;
    searchempty:boolean;
    searchData:NewsContent[];
    tempSearchData:NewsContent[];
    moreAvailable:boolean;
    pageNumber:number = 1;
    dialogRef: MatDialogRef<unknown, any>;
    noSearchResults:boolean = false;
    fromGetMore:boolean = false;

    ngOnInit(){
        if(this.common.directToSearch){
            this.router.navigate(['/business']);
        }
        scrollTo(0,0);
        this.searchValue = this.common.searchValueSaved;
        this.common.searchTriggered.subscribe(value=>{
            this.pageNumber = 1;
            this.tempSearchData = [];
            if(!this.common.searchSubscriptionCalled){
                this._populateSearchData();
            }
        });
    }

    loadingSpinner(){
        this.dialogRef = this.common.openDialog(this.matDialog,LoadingDialog,null);
    }

    getMoreOnSearch(){
        this.fromGetMore = true;
        this.tempSearchData = this.searchData;
        this.noSearchResults = false;
        this.loadingSpinner();
        this.pageNumber++;
        let date = this.common.calculateTodayDate();
        this.newsDataService.retrieveCustomSearchWithPageNumber(this.common.searchValueInHeader,date,this.pageNumber).subscribe( response =>{
            this.common.searchResponse = response;
            this._populateSearchData();
            this.dialogRef.close();
        },reject =>{

        });
    }

    private _populateSearchData(){
        this.common.prePopulateSearchedNewsInSearch(this.common.searchResponse);
        this._setValues();
        this.common.searchSubscriptionCalled = true;
    }

    private _setValues(){
        if(this.fromGetMore){
            this.searchData = this.tempSearchData.concat(this.common.searchNewsInSearch);
        }else{
            this.searchData = this.common.searchNewsInSearch;
        }    
        if(this.common.searchNewsInSearch.length === 10){
            this.moreAvailable = true;
        }else{
            this.moreAvailable = false;
        }
        if(this.searchData.length === 0){
            this.noSearchResults = true;
        }else{
            this.noSearchResults = false;
        }
    }

}