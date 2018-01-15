import { Component } from '@angular/core';
import { Image } from './image.interface';
@Component({
    selector: 'app-home',
    styleUrls: [
        './carousel.css'
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public IMAGES: Image[] = [
        {
            title: 'first-slide', 
            url: './images/diagnosis.jpg', 
            slide : '0',
            class: 'carousel-item active'
        },
        {
        title: 'second-slide', 
        url: './images/femaledoctor.jpg', 
        slide: '1',
        class: 'carousel-item'
    },
    {
        title: 'third-slide', 
        url: './images/reception.jpg', 
        slide: '2',
        class: 'carousel-item'
    }
   ];
    public images = this.IMAGES;
}
