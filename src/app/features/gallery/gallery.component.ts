import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/image.model';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(
    private imageService: ImageService,
    private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.setImages();
  }

  private setImages() {
    this.images = this.imageService.getImages(this.appConfigService.defaultNumberOfImages);
  }
}
