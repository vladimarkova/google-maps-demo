import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments';
import {catchError, map, shareReplay, tap} from "rxjs/operators";
import {of} from "rxjs";
import {Observable} from "rxjs/internal/Observable";
import { GoogleMapsTestComponent } from '../components/google-maps-test/google-maps-test.component';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {
  cachedData!: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  loadingApi = (): Observable<boolean | any[]> => {
    if(GoogleMapsTestComponent.apiLoaded) {
      return of(true);
    }
    if(!this.cachedData) {
      this.cachedData = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApi}&libraries=places`, 'callback')
        .pipe(
          tap(() => GoogleMapsTestComponent.apiLoaded = true),
          map(() => true),
          catchError(err => {
            console.log(err);
            return of([err])
          }),
          shareReplay(1),
        )
    }
    return this.cachedData;

  }
}
