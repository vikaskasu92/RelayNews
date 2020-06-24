import { Injectable } from '@angular/core';
import { NewsContent } from './models/newsContent.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({providedIn:'root'})
export class CommonService{

    constructor(public dialog: MatDialog){}

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
    mostWatched1:string[];
    mostWatched2:string[];
    mostWatched3:string[];
    mostWatched4:string[];
    mostWatched5:string[];

    prePopulateNews(response:any,newsType:string){
        this._initiatePrePopulateNews();
        for(let i=0; i<response.results.length; i++){
            const newsResponse:NewsContent = {title:'',author:'',photo:'',time:'',url:''};
            this._populateNews(response,newsType,i,newsResponse);
        }  
    }

    populateMostWatchedNews(response:any){
        this._initiateMostWatchedArray();
        this._populatedMostWatched1(response.results[0]);
        this._populatedMostWatched2(response.results[1]);
        this._populatedMostWatched3(response.results[2]);
        this._populatedMostWatched4(response.results[3]);
        this._populatedMostWatched5(response.results[4]);
    }

    openDialog(dialog:MatDialog,component:any,data:any){
        const dialogRef = dialog.open(component, {
            disableClose: true,
            data:data
        });
        return dialogRef;
    }

    private _populateNews(response:any,newsType:string,i:number,newsResponse:NewsContent){
        if((response.results[i].section === newsType || response.results[i].subsection === newsType )&& response.results[i].multimedia != null){
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

    private _initiatePrePopulateNews(){
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
    }

    private _initiateMostWatchedArray(){
        this.mostWatched1 = [];
        this.mostWatched2 = [];
        this.mostWatched3 = [];
        this.mostWatched4 = [];
        this.mostWatched5 = [];
    }

    private _populatedMostWatched1(response:NewsContent){
        this.mostWatched1.push(response.title);
        this.mostWatched1.push(response.author);
        this.mostWatched1.push(response.photo);
        this.mostWatched1.push(response.time);
        this.mostWatched1.push(response.url);
    }

    private _populatedMostWatched2(response:NewsContent){
        this.mostWatched2.push(response.title);
        this.mostWatched2.push(response.author);
        this.mostWatched2.push(response.photo);
        this.mostWatched2.push(response.time);
        this.mostWatched2.push(response.url);
    }

    private _populatedMostWatched3(response:NewsContent){
        this.mostWatched3.push(response.title);
        this.mostWatched3.push(response.author);
        this.mostWatched3.push(response.photo);
        this.mostWatched3.push(response.time);
        this.mostWatched3.push(response.url);
    }

    private _populatedMostWatched4(response:NewsContent){
        this.mostWatched4.push(response.title);
        this.mostWatched4.push(response.author);
        this.mostWatched4.push(response.photo);
        this.mostWatched4.push(response.time);
        this.mostWatched4.push(response.url);
    }

    private _populatedMostWatched5(response:NewsContent){
        this.mostWatched5.push(response.title);
        this.mostWatched5.push(response.author);
        this.mostWatched5.push(response.photo);
        this.mostWatched5.push(response.time);
        this.mostWatched5.push(response.url);
    }


}