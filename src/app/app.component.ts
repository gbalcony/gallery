import { Component, OnInit } from '@angular/core';
import { ImageService } from './core/services/image.service';
import { Image } from './core/models/image.model';
import { AppConfigService } from './core/services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gallery';
  images: Image[] = [];

  constructor(
    private imageService: ImageService,
    private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImages(this.appConfigService.defaultNumberOfImages);
  }


}
