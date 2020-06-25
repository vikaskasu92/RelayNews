import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent{

    constructor(private newsDataService:NewsDataService){}

    ngOnInit(){
        
    }

}