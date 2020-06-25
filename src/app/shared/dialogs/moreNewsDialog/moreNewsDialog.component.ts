import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector:'app-moreNewsDialog',
    templateUrl:'./moreNewsDialog.component.html',
    styleUrls:['./moreNewsDialog.component.css']
})
export class MoreNewsDialog implements OnInit{

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MoreNewsDialog>){}

    abstract:string;
    image:string;
    title:string;
    author:string;
    time:string;
    moreInfo:string;

    ngOnInit(): void {
        this.abstract = this.data.abstract;
        this.image = this.data.url;
        this.title = this.data.title;
        this.author = this.data.author;
        this.time = this.data.time;
        this.moreInfo = this.data.moreInfo;
    }

    closeMoreNewsDialog(){
        this.dialogRef.close();
    }

}