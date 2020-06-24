import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../../newsData.service';
import { CommonService } from '../../common.service';

@Component({
    selector:'app-mostViewedComponent',
    templateUrl:'./mostViewedComponent.component.html',
    styleUrls:['./mostViewedComponent.component.css']
})
export class MostViewedComponent implements OnInit{

    constructor(private newsDataService:NewsDataService,
                private commonService:CommonService){}

    mostWatched1:string;
    mostWatched2:string;
    mostWatched3:string;
    mostWatched4:string;
    mostWatched5:string;

    ngOnInit(){
        this.retrieveMostWatchedNews();
    }

    retrieveMostWatchedNews(){
        this.newsDataService.retrieveMostViewedNews().subscribe( response =>{
            this.commonService.populateMostWatchedNews(response);
            this.mostWatched1 = this.commonService.mostWatched1[0];
            this.mostWatched2 = this.commonService.mostWatched2[0];
            this.mostWatched3 = this.commonService.mostWatched3[0];
            this.mostWatched4 = this.commonService.mostWatched4[0];
            this.mostWatched5 = this.commonService.mostWatched5[0];
        },reject =>{

        });
    }

}