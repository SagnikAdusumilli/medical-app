import { Component } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent {
 public defaultLatitude: number = 51.678418;
 public defaultLongitude: number = 7.809007;
 public latitude: number = this.defaultLatitude;
 public longitude: number = this.defaultLongitude;
 public locationChosen = false; 

 public onChoseLocation(event) {
     this.latitude = event.coords.lat;
     this.longitude = event.coords.lng;
     this.locationChosen = true;
 } 
}
