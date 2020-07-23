import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform( itemArray: any[], name: string ): any[] {
    if ( !itemArray ) {
      return [];
    }
    if ( !name ) {
      return itemArray;
    }
    return itemArray.filter( item => {
      return item.name.toLowerCase().includes( name.toLowerCase() );
    } );
  }
}
