import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], text: string): any[] {
    if(!text){
      return list;
    }
    let arr1 = list.filter(food => food.nome.toUpperCase().includes(text.toUpperCase()))
    let arr2 = list.filter(food => food.cucina.toUpperCase().includes(text.toUpperCase()));

    const mySet = new Set([
      ...arr1,
      ...arr2
    ]);
    return Array.from(mySet);
  }
  

}
