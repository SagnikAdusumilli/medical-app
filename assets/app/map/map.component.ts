import { Component } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent {
 public latitude;
 public longitude;
 public locationChosen = false;
 public zoom = 9;
 public mapCenter = [51.35459712, 0.073658347];
 
 public clinicMarkers = [
     {
        lat: 51.517063, 
        lng: -0.098697,
        name: 'St. Bartholomew\'s Hospital'
     },
     {
        lat: 51.131670,
        lng: 0.277765,
        name: 'Nuffield Health Tunbridge Wells Hospital'
     }
 ];

 public onChoseLocation(event) {
     this.latitude = event.coords.lat;
     this.longitude = event.coords.lng;
     this.locationChosen = true;
 } 
}
