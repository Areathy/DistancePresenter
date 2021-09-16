import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class LocationService
{
  constructor(private httpClient: HttpClient)
  {
  }

  getLocation(): Observable<any>
  {
    return this.httpClient.get<any>("/assets/location.json").pipe(map((response) =>{
      for (let i = 0; i < response.length; i++)
      {
        for (let j = 0; j < response[i].rows.length; j++)
        {

          //sort elements based distance - ascending
          response[i].rows[j].elements = response[i].rows[j].elements.sort((a:any, b:any) => {
            let comparison = 0;
            if (a.distance.value > b.distance.value)
            {
              comparison = 1;
            }
            else if (a.distance.value < b.distance.value)
            {
              comparison = -1;
            }
            return comparison;
          });


          //find max
          response[i].rows[j].max = Math.max.apply(null, response[i].rows[j].elements.map((ele:any) => ele.distance.value));
        }
      }
      return response;
    }));
  }
}


