import { Component } from '@angular/core';

@Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})
export class FooterComponent{

    openNYTDeveloperSite(event:any){
        event.preventDefault();
        window.open("https://developer.nytimes.com");
    }
   

}