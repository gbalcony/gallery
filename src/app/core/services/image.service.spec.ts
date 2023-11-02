import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';

describe('ImageService', () => {
  let service: ImageService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return images', () => {
    const numberOfImages = 3;
    const expectedResult = [
      {
        "id": 1,
        "photo": "https://picsum.photos/id/1/500/500",
        "text": "This is the image number 1"
      },
      {
        "id": 2,
        "photo": "https://picsum.photos/id/2/500/500",
        "text": "This is the image number 2"
      },
      {
        "id": 3,
        "photo": "https://picsum.photos/id/3/500/500",
        "text": "This is the image number 3"
      }
    ];

    expect(service.getImages(numberOfImages)).toEqual(expectedResult);
  });
});
