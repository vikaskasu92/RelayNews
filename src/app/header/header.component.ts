import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

    constructor(private router:Router,
                private newsDataService:NewsDataService,
                private common:CommonService){}

    searchContentValue:string;

    openNews(newsType:string){
        this.router.navigate(['/'+newsType]);
    }

    searchContent(){
        this.newsDataService.retrieveCustomSearch(this.searchContentValue).subscribe( response => {
            console.log(response);
            this.common.searchResponse = response;
        },reject =>{

        })
        this.router.navigate(['/search']);
    }

}