import {Injectable} from '@angular/core';
import {data} from './data';

@Injectable()
export class DataService {
constructor() {}
	getData() {
		return Promise.resolve(DATAS)
	}

	getDatas(id: string) {
		return	 Promise.resolve(DATAS)
		.then(
				datas => datas.filter(data => data.id === id)[0]
			);
	}


	getDataSlow(){
		return new Promise<data[]>(resolve =>
			setTimeout(() => resolve(DATAS), 2000)
		);
	}
}
 var DATAS: data[] = [
  { 
    id:"114",
    name:"Mr Muthu", 
    shortname:"muthukumar",
    reknown:"Royal Academy of Painting and Sculpture",
    bio:"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  { 
  	id:"111",
    name:"Mr Bellingham", 
    shortname:"Barot_Bellingham",
    reknown:"Royal Academy of Painting and Sculpture",
    bio:"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
  	id:"112",
    name:"Jonathan G. Ferrar II",
    shortname:"Jonathan_Ferrar",
    reknown:"Artist to Watch in 2012",
    bio:"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
  	id:"113",
    name:"Hillary Hewitt Goldwynn-Post",
    shortname:"Hillary_Goldwynn",
    reknown:"New York University",
    bio:"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  }
  ];