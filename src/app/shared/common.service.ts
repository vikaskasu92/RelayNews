import { Injectable } from '@angular/core';
import { NewsContent } from './models/newsContent.model';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class CommonService{

    constructor(public dialog: MatDialog){}

    newsContents1:NewsContent[];
    newsContents2:NewsContent[];
    moreNewsContents1:NewsContent[];
    moreNewsContents2:NewsContent[];
    moreNewsContents3:NewsContent[];
    searchNewsInSearch:NewsContent[];
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
    searchResponse:any;
    searchTriggered = new BehaviorSubject<boolean>(true);
    searchSubscriptionCalled:boolean = false;
    searchvalue = new BehaviorSubject<string>(null);
    searchValueInHeader:string;
    searchValueSaved= this.searchvalue.asObservable();
    directToSearch:boolean = true;

    prePopulateNews(response:any,newsType:string){
        this._initiatePrePopulateNews();
        for(let i=0; i<response.results.length; i++){
            const newsResponse:NewsContent = {title:'',author:'',photo:'',time:'',url:'',abstract:''};
            this._populateNews(response,newsType,i,newsResponse);
        }  
    }

    prePopulateSearchedNews(response:any){
        this._initiatePrePopulateNews();
        for(let i=0; i<response.response.docs.length; i++){
            const newsResponse:NewsContent = {title:'',author:'',photo:'',time:'',url:'',abstract:''};
            this._populateSearchedNews(response,i,newsResponse);
        }  
    }

    prePopulateSearchedNewsInSearch(response:any){
        this._initiatePrePopulateNewsInSearch();
        for(let i=0; i<response.response.docs.length; i++){
            const newsResponse:NewsContent = {title:'',author:'',photo:'',time:'',url:'',abstract:''};
            this._populateSearchedNewsInSearch(response,i,newsResponse);
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

    calculateTodayDate():number{
        let month = this._appendLeadingZeroIfRequired(new Date().toLocaleDateString().substring(0,1));
        let day = this._appendLeadingZeroIfRequired(new Date().toLocaleDateString().substring(2,4));
        let year = new Date().toLocaleDateString().substring(5);
        var date = parseInt((year+month+day));
        return date;
    }

    private _appendLeadingZeroIfRequired(value:string):string{
        if(value.length === 1){
            return 0+value;
        }else{
            return value;
        }
    }

    private _populateSearchedNews(response:any,i:number,newsResponse:NewsContent){
        newsResponse.title = response.response.docs[i].headline.main;
        newsResponse.author = response.response.docs[i].byline.original;
        if(response.response.docs[i].byline.original != null){
            newsResponse.author = response.response.docs[i].byline.original.substring(2);
        }
        newsResponse.photo = "/../../assets/images/no_image.png";
        if( response.response.docs[i].multimedia.length != 0){
            if(response.response.docs[i].multimedia[i].url != null){
                newsResponse.photo = "https://static01.nyt.com/"+response.response.docs[i].multimedia[i].url;
            }
        } 
        newsResponse.time = response.response.docs[i].pub_date;
        if(response.response.docs[i].pub_date != null){
            newsResponse.time = this._calculateTime( response.response.docs[i].pub_date.substring(11,19),response.response.docs[i].pub_date.substring(8,10),response.response.docs[i].pub_date.substring(0,10));
        }
        newsResponse.url = response.response.docs[i].web_url;
        newsResponse.abstract = response.response.docs[i].abstract;
        this._pushToArrays(newsResponse);
    }

    private _populateSearchedNewsInSearch(response:any,i:number,newsResponse:NewsContent){
        newsResponse.title = response.response.docs[i].headline.main;
        newsResponse.author = response.response.docs[i].byline.original;
        if(response.response.docs[i].byline.original != null){
            newsResponse.author = response.response.docs[i].byline.original.substring(2);
        }
        newsResponse.photo = undefined;
        if( response.response.docs[i].multimedia.length != 0){
            if(response.response.docs[i].multimedia[i].url != null){
                newsResponse.photo = "https://static01.nyt.com/"+response.response.docs[i].multimedia[i].url;
            }
        } 
        newsResponse.time = response.response.docs[i].pub_date;
        if(response.response.docs[i].pub_date != null){
            newsResponse.time = this._calculateTime( response.response.docs[i].pub_date.substring(11,19),response.response.docs[i].pub_date.substring(8,10),response.response.docs[i].pub_date.substring(0,10));
        }
        newsResponse.url = response.response.docs[i].web_url;
        newsResponse.abstract = response.response.docs[i].abstract;
        this._pushToInSearchArrays(newsResponse);
    }

    private _populateNews(response:any,newsType:string,i:number,newsResponse:NewsContent){
        if((response.results[i].section === newsType || response.results[i].subsection === newsType )&& response.results[i].multimedia != null){
            newsResponse.title = response.results[i].title;
            newsResponse.author = response.results[i].byline.substring(2);
            newsResponse.photo = response.results[i].multimedia[0].url;
             newsResponse.time = this._calculateTime( response.results[i].created_date.substring(11,19),response.results[i].created_date.substring(8,10),response.results[i].created_date.substring(0,10));
            newsResponse.url = response.results[i].short_url;
            newsResponse.abstract = response.results[i].abstract;
            this._pushToArrays(newsResponse);
        }
    }

    private _calculateTime(newsTime:string, newsDate:string, actualDate:string){
        let today = new Date().getDate();
        if(newsDate === today.toString()){
            let currentHour = new Date().toTimeString().substring(0,2);
            let currentMin = new Date().toTimeString().substring(3,5);
            let newsHour = newsTime.substring(0,2);
            let newsMin = newsTime.substring(3,5)
            if(currentHour === newsHour){
                if(currentMin === newsMin){
                    return 'Just Now';
                }else if((+currentMin - +newsMin) === 1){
                    return '1 min ago';
                }else{
                    return this._checkForModulus(+currentMin - +newsMin) +' mins ago ';
                }
            }else if((+currentHour - +newsHour) === 1){
                return '1 hour ago';
            }else{
                return this._checkForModulus(+currentHour - +newsHour) +' hours ago';
            }
        }else{
            return actualDate;
        }
    }

    private _checkForModulus(time:number){
        if (time < 0) {
            time = time * -1;
        }
        return time;
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

    private _pushToInSearchArrays(newsResponse:NewsContent){
        this.searchNewsInSearch.push(newsResponse);
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

    private _initiatePrePopulateNewsInSearch(){
        this.searchNewsInSearch = [];
    }

    private _initiateMostWatchedArray(){
        this.mostWatched1 = [];
        this.mostWatched2 = [];
        this.mostWatched3 = [];
        this.mostWatched4 = [];
        this.mostWatched5 = [];
    }

    private _populatedMostWatched1(response:any){
        this.mostWatched1.push(response.title);
        this.mostWatched1.push(response.byline.substring(2));
        this.mostWatched1.push(response.photo);
        this.mostWatched1.push(response.time);
        this.mostWatched1.push(response.url);
        this.mostWatched1.push(response.abstract);
        
    }

    private _populatedMostWatched2(response:any){
        this.mostWatched2.push(response.title);
        this.mostWatched2.push(response.byline.substring(2));
        this.mostWatched2.push(response.photo);
        this.mostWatched2.push(response.time);
        this.mostWatched2.push(response.url);
        this.mostWatched2.push(response.abstract);
    }

    private _populatedMostWatched3(response:any){
        this.mostWatched3.push(response.title);
        this.mostWatched3.push(response.byline.substring(2));
        this.mostWatched3.push(response.photo);
        this.mostWatched3.push(response.time);
        this.mostWatched3.push(response.url);
        this.mostWatched3.push(response.abstract);
    }

    private _populatedMostWatched4(response:any){
        this.mostWatched4.push(response.title);
        this.mostWatched4.push(response.byline.substring(2));
        this.mostWatched4.push(response.photo);
        this.mostWatched4.push(response.time);
        this.mostWatched4.push(response.url);
        this.mostWatched4.push(response.abstract);
    }

    private _populatedMostWatched5(response:any){
        this.mostWatched5.push(response.title);
        this.mostWatched5.push(response.byline.substring(2));
        this.mostWatched5.push(response.photo);
        this.mostWatched5.push(response.time);
        this.mostWatched5.push(response.url);
        this.mostWatched5.push(response.abstract);
    }


}