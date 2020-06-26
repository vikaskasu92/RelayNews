import { Component, Input } from '@angular/core';
import { NewsContent } from '../../models/newsContent.model';

@Component({
    selector:'app-displayNews',
    templateUrl:'./displayNews.component.html',
    styleUrls:['./displayNews.component.css']
})
export class DisplayNewsComponent{

    @Input() newsContents1:NewsContent[];
    @Input() newsContents2:NewsContent[];
    @Input() moreNewsContents1:NewsContent[];
    @Input() moreNewsContents2:NewsContent[];
    @Input() moreNewsContents3:NewsContent[];

}