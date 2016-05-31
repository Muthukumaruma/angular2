import { Component, Input,  OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { data } from '../data/data';// data
import { DataService } from '../data/data.service';

@Component({
  selector: 'detail',
  template: `
  <button (click)="goBack()">Back</button>
  			<div class="col-md-12" *ngIf="datas">
		      <h4>{{datas.name }}</h4>
		      <p>{{datas.id}}</p>
		      <p>{{datas.reknown}}</p>
		      <p>{{datas.bio}}</p>
		      <div>
		        <label>name: </label>
		        <input [(ngModel)]="id" placeholder="name"/>
		      </div>
		    </div>
  `
})
export class DetailComponent implements OnInit{
	@Input() datas: data;
	constructor(
  private dataService: DataService,
  private routeParams: RouteParams) {
}
ngOnInit(){
	let id = this.routeParams.get('id');
    this.dataService.getDatas(id)
      .then(datas => this.datas = datas);
 }
 goBack() {
  window.history.back();
}
}