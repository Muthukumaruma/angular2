//Muthu
import { Component } from '@angular/core';
export class data{//name suld be local data or api data name/ add data type
name:string;
shortname:string;
reknown:string;
bio:string;
}
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

      </li>
    </ul>
    <div class="col-md-8" *ngIf="selected">
      <h4>{{selected.name }}</h4>
      <p>{{selected.reknown}}</p>
      <p>{{selected.bio}}</p>
    </div>`
})
export class MuthuComponent {
	datas = DATAS;
  selected : data;// add a header for local data for slected data detail section
  onSelect(detail : data){ this.selected = detail; }// on select function. checking the detail with local/API data
 }// local data shuld be outside the class
 var DATAS : data[] = [
  { 
    "name":"Mr Bellingham",
    "shortname":"Barot_Bellingham",
    "reknown":"Royal Academy of Painting and Sculpture",
    "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
    "name":"Jonathan G. Ferrar II",
    "shortname":"Jonathan_Ferrar",
    "reknown":"Artist to Watch in 2012",
    "bio":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
    "name":"Hillary Hewitt Goldwynn-Post",
    "shortname":"Hillary_Goldwynn",
    "reknown":"New York University",
    "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  }
  ];