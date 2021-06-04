import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RistorantiService {
  
  private stringaSearch = new BehaviorSubject<string>('');
 
  $getStringaSearch = this.stringaSearch.asObservable();
  constructor() { }



  updateStringaSearch(str:string){
    this.stringaSearch.next(str); //value = ''; -> value = str
  }
}
