import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';

@Component({
    selector:'app-movieReviewsComponent',
    templateUrl:'./movieReviewsComponent.component.html',
    styleUrls:['./movieReviewsComponent.component.css']
})
export class MovieReviewsComponent implements OnInit{

    constructor(private newsDataService:NewsDataService){}

    ngOnInit(){
        this.newsDataService.retrieveMovieReviews('drama').subscribe(response =>{
            console.log(response);
        },
        reject=>{
            console.log("rejected!");
        });
    }

}