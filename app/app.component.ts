import { Component } from '@angular/core';//core angular
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';// add rout
import { DataService } from './data/data.service';// data service
import { MuthuComponent } from './muthu/muthu.component';// data
import { DashboardComponent } from './dashboard/dashboard.component';// dashboard
import { DetailComponent } from './dashboard/detail.component';
@Component({
  selector: 'my-app',
  template: `
  			<a [routerLink]="['Muthu']">Muthu</a><!--ROUTE NAVIGATION -->
  			<a [routerLink]="['Dashboard']">Dashboard</a>
  			
  			
  			<h1>{{title}}</h1>
  			
        <router-outlet></router-outlet> <!--its ROUTER_DIRECTIVES =>ALL ROUTE WILL SHOW INSID THIS TAG -->      
  `,
 // moduleId: module.id,
  //templateUrl: 'muthu/muthu.component.html',
  directives:[ ROUTER_DIRECTIVES],
  providers:[DataService, ROUTER_PROVIDERS  ],


})

@RouteConfig([
  {
    path: '/muthu',
    name: 'Muthu',
    component: MuthuComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
  path: '/detail/:id',
  name: 'Detail',
  component: DetailComponent
}
])
export class AppComponent { 
	title ="My First App";

}


