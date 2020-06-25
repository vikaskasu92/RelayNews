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

    openNews(newsType:string){
        this.router.navigate(['/'+newsType]);
    }

    loadingSpinner(){
        this.dialogRef = this.common.openDialog(this.matDialog,LoadingDialog,null);
    }

    searchContent(){
        this.loadingSpinner();
        this.newsDataService.retrieveCustomSearch(this.searchContentValue).subscribe( response => {
            this._callSearchTriggerSequence(response);
            this.dialogRef.close();
        },reject =>{

        })
    }

    private _callSearchTriggerSequence(response:any){
        this.common.searchResponse = response;
        this.common.searchSubscriptionCalled = false;
        this.router.navigate(['/search']);
        this.common.searchTriggered.next(true);
    }

}