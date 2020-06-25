import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class NewsDataService{

    constructor(private http:HttpClient){}

    retrieveCustomSearch(searchValue:string){
       return this.http.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchValue+"&api-key=S3Ol3vRvGC57LinpKOkTWqXW3MtncQb8");
    }

    retrieveMainPage(searchValue:string,today:number,pageNumber:number){
        return this.http.get<any>("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchValue+"&begin_date="+today+"&sort=newest&api-key=S3Ol3vRvGC57LinpKOkTWqXW3MtncQb8");
    }

    retrieveNews(newsType:string){
        return this.http.get<any>("https://api.nytimes.com/svc/topstories/v2/"+newsType+".json?api-key=S3Ol3vRvGC57LinpKOkTWqXW3MtncQb8");
    }

    retrieveMostViewedNews(){
        return this.http.get<any>("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=S3Ol3vRvGC57LinpKOkTWqXW3MtncQb8");
    }

    retrieveMovieReviews(movieName:string){
        return this.http.get<any>("https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=40&api-key=S3Ol3vRvGC57LinpKOkTWqXW3MtncQb8")
    }

}