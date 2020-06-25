import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent{

    constructor(private common:CommonService){}

    mainNewsType:string = 'Search';

    ngOnInit(){
        scrollTo(0,0);
        console.log("from search component ",this.common.searchResponse);
    }

}