//Muthu
import { Component, OnInit } from '@angular/core';
import {data} from '../data/data';
import {DataService} from '../data/data.service';

@Component({
  selector: 'muthu',
  template: `
    <ul class="list col-md-4">
      <li *ngFor= "let detail of datas" 
      (click)="onSelect(detail)" 
      [class.selected]="detail === selected" class="bg-primary ">

        <h3>{{detail.name}}</h3>

      </li>
    </ul>
    <div class="col-md-8" *ngIf="selected">
      <h4>{{selected.name }}</h4>
      <p>{{selected.reknown}}</p>
      <p>{{selected.bio}}</p>
    </div>`,
    providers:[DataService]
})
export class MuthuComponent implements OnInit{
	datas : data[];
  selected : data;
  constructor(private dataService: DataService) { }
  getData() {
    this.dataService.getData().then(datas => this.datas = datas);
  }
  ngOnInit() {
    this.getData();
  }
  onSelect(detail : data){ this.selected = detail; }
 }
 