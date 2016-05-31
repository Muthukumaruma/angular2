//Muthu
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {data} from '../data/data';
import {DataService} from '../data/data.service';
import {DetailComponent} from '../dashboard/detail.component';


@Component({
  selector: 'muthu',
  template: `
    <ul class="list col-md-4">
      <li *ngFor= "let data of datas" 
      (click)="onSelect(data)" 
      [class.selected]="data === selected" class="bg-primary ">

        <h3><span>{{data.id}}</span> {{data.name}}</h3>

      </li>
    </ul>
 `,
    directives:[DetailComponent]
})
export class MuthuComponent implements OnInit{
	datas : data[];
  selected : data;
  constructor(private router: Router, private dataService: DataService) { }
  getData() {
    this.dataService.getData().then(datas => this.datas = datas);
  }
  ngOnInit() {
    this.getData();
  }
  onSelect(data : data){ this.selected = data; }
  gotoDetail() {
    this.router.navigate(['Detail', { id: this.selected.id }]);
  }
 }

 