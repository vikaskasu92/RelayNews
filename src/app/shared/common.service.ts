import { Injectable } from '@angular/core';
import { NewsContent } from './models/newsContent.model';

@Injectable({providedIn:'root'})
export class CommonService{

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

    prePopulateNews(response:any,newsType:string){
        console.log(response);
        this.even = true;
        this.odd = true;
        this.first = true;
        this.second = false;
        this.third = false;
        this.newsContents1 = [];
        this.newsContents2 = [];
        this.moreNewsContents1 = [];
        this.moreNewsContents2 = [];
        this.moreNewsContents3 = [];
        for(let i=0; i<response.results.length; i++){
            const newsResponse:NewsContent = {title:'',author:'',photo:'',time:'',url:''};
            this._populateNews(response,newsType,i,newsResponse);
        }  
    }

    private _populateNews(response:any,newsType:string,i:number,newsResponse:NewsContent){
        if(response.results[i].section === newsType && response.results[i].multimedia != null){
            newsResponse.title = response.results[i].title;
            newsResponse.author = response.results[i].byline.substring(2);
            newsResponse.photo = response.results[i].multimedia[0].url;
            newsResponse.time = response.results[i].created_date.substring(0,10);
            newsResponse.url = response.results[i].short_url;
            this._pushToArrays(newsResponse);
            
        }
    }

    private _pushToArrays(newsResponse:NewsContent){
        if(this.odd){
            this.newsContents1.push(newsResponse);
            this.odd = false;
        }else if(this.even){
            this.newsContents2.push(newsResponse);
            this.even = false;
        }else{
            this._pushToBottom(newsResponse);
        }
    }

    private _pushToBottom(newsResponse:NewsContent){
        if(this.first){
            this.moreNewsContents1.push(newsResponse);
            this.first = false;
            this.second = true;
        }else if(this.second){
            this.moreNewsContents2.push(newsResponse);
            this.second = false;
            this.third = true;
        }else{
            this.moreNewsContents3.push(newsResponse);
            this.first = true;
            this.third = false;
        }
    }


}