import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'nombrecolor'
})
export class NombrecolorPipe implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}

export class MayusculasPipe implements PipeTransform {

    transform(valor: string, enMayusculas: boolean = true): string {
        if (enMayusculas) {
            return valor.toUpperCase();
        } else {
            return valor.toLowerCase();
        }

    }
}