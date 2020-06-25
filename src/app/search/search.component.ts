import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent implements OnInit{

    constructor(private common:CommonService,
                private router:Router){}

    mainNewsType:string = 'Search';
    searchValue:Observable<string>;
    searchempty:boolean;
    image:string;
    title:string;
    author:string;
    time:string;
    moreInfo:string;
    abstract:string;

    ngOnInit(){
        scrollTo(0,0);
        this.searchValue = this.common.searchValueSaved;
        if(this.common.directToSearch){
            this.router.navigate(['/business']);
        }
        this.common.searchTriggered.subscribe(value=>{
            if(!this.common.searchSubscriptionCalled){
                console.log("from search component subscription",this.common.searchResponse);
                this.common.searchSubscriptionCalled = true;
            }
        });
    }

}