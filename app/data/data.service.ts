import {Injectable} from '@angular/core';
import {data} from './data';
import {DATAS} from './data-mock';

@Injectable()
export class DataService {
	
	getData() {
		return Promise.resolve(DATAS);
	}

	getDataSlow(){
		return new Promise<data[]>(resolve =>
			setTimeout(() => resolve(DATAS), 2000)
		);
	}
}