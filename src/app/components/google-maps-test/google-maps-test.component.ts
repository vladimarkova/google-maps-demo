import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { BehaviorSubject } from 'rxjs';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-google-maps-test',
  templateUrl: './google-maps-test.component.html',
  styleUrls: ['./google-maps-test.component.scss']
})
export class GoogleMapsTestComponent implements OnInit {
  @ViewChild('googleMap', { read: GoogleMap }) googleMap!: GoogleMap;

  @Input() width = '100%';
  @Input() height = '500px';
  static apiLoaded = false;

  apiLoaded$ = this.googleMapsService.loadingApi();

  lat = 43.204666;
  lng = 27.910543;

  options: google.maps.MapOptions | undefined = {
    center: { lat: this.lat || 43.204666, lng: this.lng || 27.910543 }, // Varna, Bulgaria
    zoom: 7,
    gestureHandling: 'cooperative'
  };

  markersFitBoundsPadding: number = 200;

  markers: google.maps.marker.AdvancedMarkerView[] = [];
  // google.maps.marker.AdvancedMarkerView[]

  selectedMarker!: null;

  map: any = null;

  constructor(private googleMapsService: GoogleMapService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.apiLoaded$.subscribe(loaded => {
      if (loaded) {
        console.log('api loaded...!');
        this.addMarker();
        console.log(this.markers);
      }
    });
  }

  addMarker() {
    // const pinViewScaled = new google.maps.marker.PinView({
    //   scale: 1.5,
    // });
    this.markers.push({
      position: { lat: this.lat || 43.204666, lng: this.lng || 27.910543 },
      title: 'Marker title',
      // content: pinViewScaled.element,
      addListener(eventName, handler) {
        return handler(eventName);
      },
    });
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event);
  }

  getBounds(markers: google.maps.Marker[]) {
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    for (const marker of markers) {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north = north ? Math.max(north, marker.getPosition()!.lat()) : marker.getPosition()!.lng();
      south = south ? Math.min(south, marker.getPosition()!.lat()) : marker.getPosition()!.lng();
      east = east ? Math.max(east, marker.getPosition()!.lat()) : marker.getPosition()!.lng();
      west = west ? Math.min(west, marker.getPosition()!.lat()) : marker.getPosition()!.lng();
    }
    ;

    const bounds = { north, south, east, west };

    return bounds;
  }

}
