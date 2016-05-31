import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {data} from '../data/data';
import {DataService} from '../data/data.service';

@Component({
  selector: 'my-dashboard',
  template: `
  			<ul class="list col-md-4">
		      <li *ngFor= "let list of datas" (click)="gotoDetail(list)" class="bg-primary ">
		        <h3>{{list.name}}</h3>
            
		      </li>
		    </ul>
  `
})
export class DashboardComponent implements OnInit {
datas : data[] =[];
constructor( private router: Router, private dataService: DataService) { }

ngOnInit(){
	this.dataService.getData().then(datas => this.datas = datas.slice(1,5));
 }

gotoDetail(data: data) {
  let link = ['Detail', { id: data.id }]; //set a route link parameters array
  this.router.navigate(link); //pass the array to the router's navigate method.
}
}
