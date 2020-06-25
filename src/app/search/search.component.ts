import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent implements OnInit{

    constructor(private common:CommonService){}

    mainNewsType:string = 'Search';

    ngOnInit(){
        scrollTo(0,0);
        this.common.searchTriggered.subscribe(value=>{
            if(!this.common.searchSubscriptionCalled){
                console.log("from search component subscription",this.common.searchResponse);
                this.common.searchSubscriptionCalled = true;
            }
        })
    }

}