import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoadingDialog } from '../shared/dialogs/loadingDialog/loadingDialog.component';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

    constructor(private router:Router,
                private newsDataService:NewsDataService,
                private common:CommonService,
                private matDialog:MatDialog){}

    searchContentValue:string;
    dialogRef: MatDialogRef<unknown, any>;
    searchDisabled:boolean = true;

    openNews(newsType:string){
        this.searchContentValue = "";
        this.router.navigate(['/'+newsType]);
    }

    loadingSpinner(){
        this.dialogRef = this.common.openDialog(this.matDialog,LoadingDialog,null);
    }

    searchContent(){
        this.common.searchvalue.next(this.searchContentValue);
        this.common.searchValueInHeader = this.searchContentValue;
        this.loadingSpinner();
        let date = this.common.calculateTodayDate();
        this.newsDataService.retrieveCustomSearchWithPageNumber(this.searchContentValue,date,1).subscribe( response => {
            this._callSearchTriggerSequence(response);
            this.dialogRef.close();
        },reject =>{

        });
    }

    searchTyped(){
        if(this.searchContentValue != ""){
            this.searchDisabled = false;
        }else{
            this.searchDisabled = true;
        }
    }

    goHome(){
        this.router.navigate(['/business']);
    }

    private _callSearchTriggerSequence(response:any){
        this.common.searchResponse = response;
        this.common.searchSubscriptionCalled = false;
        this.common.directToSearch = false;
        if(window.location.pathname === "/search"){
            this.common.searchTriggered.next(true);
        }else{
            this.router.navigate(['/search']); 
        }
    }

}