import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector:'app-loadingDialog',
    templateUrl:'./loadingDialog.component.html',
    styleUrls:['./loadingDialog.component.css']
})
export class LoadingDialog implements AfterViewInit{

    @ViewChild('matDialogDiv',{static:false}) matDialogDiv:ElementRef

    ngAfterViewInit(): void {
        this.matDialogDiv.nativeElement.parentElement.parentElement.style = 'background-color: transparent; margin: 0px;padding: 0px;max-height: 75px;';
    }

}