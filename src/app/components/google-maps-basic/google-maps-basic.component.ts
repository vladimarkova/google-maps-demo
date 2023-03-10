import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-google-maps-basic',
  templateUrl: './google-maps-basic.component.html',
  styleUrls: ['./google-maps-basic.component.scss']
})

export class GoogleMapsBasicComponent implements OnInit {

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.42, lng: -122.1 },
        zoom: 14,
        mapId: "4504f8b37365c3d0",
      });
      const priceTag = document.createElement("div");

      priceTag.className = "price-tag";
      priceTag.textContent = "$2.5M";

      const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: { lat: 37.42, lng: -122.1 },
        content: priceTag,
      });
      console.log('init map called...!');
    }

    window.initMap = initMap;
    `;
    // script.src = '/src/assets/scripts.js';

    this._renderer2.appendChild(this._document.body, script);
  }

}
