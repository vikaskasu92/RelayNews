import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';

@Component({
    selector:'app-otherNewsComponent',
    templateUrl:'./otherNewsComponent.component.html',
    styleUrls:['./otherNewsComponent.component.css']
})
export class OtherNewsComponent implements OnInit{

    constructor(private newsDataService:NewsDataService){}

    mainNewsType:string = "Movie Reviews";

    ngOnInit(){
        scrollTo(0,0);
        this.newsDataService.retrieveMovieReviews('drama').subscribe(response =>{
            console.log(response);
        },
        reject=>{
            console.log("rejected!");
        });
    }

}