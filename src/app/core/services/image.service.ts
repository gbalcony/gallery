import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import { PicsumService } from './picsum.service';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private picsumService: PicsumService,
    private appConfigService: AppConfigService) {}
  
  getImages(number: number) {
    const images: Image[] = [];

    for (let index = 1; index <= number; index++) {
      images.push({
        id: index,
        photo: this.getImageUrl(index),
        text: `This is the image number ${index}`
      });
    }
    return images;
  }

  private getImageUrl(imageId: number) {
    return this.picsumService.getImageUrl(imageId, this.appConfigService.defaultImageSize);
  }
}
