import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = "https://picsum.photos";

  constructor(private http: HttpClient) { }

  getImage(id: number, size: {width: number, height?: number}) {
    const imageUrl = this.getImageUrl(id, size);
    return this.http.get(imageUrl, {responseType: "blob"});
  }

  private getImageUrl(id: number, size: {width: number, height?: number}) {
    let imageUrl = `${this.baseUrl}/id/${id}/${size.width}`;

    if (typeof size.height === 'number') {
      imageUrl += `/${size.height}`;
    }
    return imageUrl;
  }
}
