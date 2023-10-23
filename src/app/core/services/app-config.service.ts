import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  defaultImageSize = {width: 500, height: 500};
  defaultNumberOfImages = 4000;

  constructor() { }
}
