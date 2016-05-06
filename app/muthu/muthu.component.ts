//Muthu
import { Component } from '@angular/core';
export class data{
name:string;
shortname:string;
reknown:string;
bio:string;
}
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
    </div>`
})
export class MuthuComponent {
	datas = DATAS;
  selected : data;
  onSelect(detail : data){ this.selected = detail; }
 }
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