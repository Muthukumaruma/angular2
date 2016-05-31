//Muthu
import { Component } from '@angular/core';
import { data } from './data/data';// data
import { DataService } from './data/data.service';

@Component({
  selector: 'muthu',
  template: `
  <!--
    *ngFor= "let detail of datas" ==> ngFor for repit the data and move the data to detail var
    (click)="onSelect(detail)"  ==> for click event for this "detail"
    class.selected]="detail === selected" ==> add selected class. checking with selected data
    <div class="col-md-8" *ngIf="selected"> ==> checking the selected data with all local data and if the data will matching it will show the data

  -->
    <ul class="list col-md-4">
      <li *ngFor= "let detail of datas" 
      (click)="onSelect(detail)" 
      [class.selected]="detail === selected" class="bg-primary ">

        <h3>{{detail.name}}</h3>
        <p>detail.id</p>

      </li>
    </ul>
    `
})
export class MuthuComponent {
	//datas = DATAS;
  selected : data;// add a header for local data for slected data detail section
  onSelect(detail : data){ this.selected = detail; }// on select function. checking the detail with local/API data
 }// local data shuld be outside the class
 