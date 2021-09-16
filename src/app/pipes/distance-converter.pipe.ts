import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metretokilometre'
})
export class DistanceConverterPipe implements PipeTransform
{
  transform(value: any): any
  {
    if (value == null)
    {
      return null;
    }
    else
    {
      return (value * 0.0009999975145).toFixed(0);
    }
  }
}

