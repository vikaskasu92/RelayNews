import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';
import { CommonService } from '../shared/common.service';
import { NewsContent } from '../shared/models/newsContent.model';

@Component({
    selector:'app-technologyComponent',
    templateUrl:'./technologyComponent.component.html',
    styleUrls:['./technologyComponent.component.css']
})
export class TechnologyComponent{

    constructor(private newsDataService:NewsDataService,
        private commonService:CommonService){}

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
    newsType:string = 'Technology';
    mainNewsType:string = 'Technology News';
    
    ngOnInit(){
        this.populteNews();
    }

    populteNews(){
        this.newsDataService.retrieveNews('technology').subscribe(response =>{
            this.commonService.prePopulateNews(response,'technology'); 
            this._initializeNews();
        },reject =>{

        });
    }

    fetchRelatedNews(newsType:string){
        this.newsDataService.retrieveNews(newsType).subscribe( response =>{
            this.newsType = newsType;
            this.commonService.prePopulateNews(response,newsType); 
            this._initializeNews();
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