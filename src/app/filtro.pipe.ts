import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: string): string {
    return value.toString().split(',').join(' junto con ');
  }
}
