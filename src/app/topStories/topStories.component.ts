import { Component } from '@angular/core';
import { NewsDataService } from '../shared/newsData.service';

@Component({
    selector:'app-topStories',
    templateUrl:'./topStories.component.html',
    styleUrls:['./topStories.component.css']
})
export class TopStoriesComponent{

    constructor(private newsDataService:NewsDataService){}

    data:any;

    ngOnInit(){
        this.newsDataService.retrieveTopStories().subscribe( data =>{
            this.data = data;
            console.log(data);
        });
    }

}