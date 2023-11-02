import { TestBed } from '@angular/core/testing';

import { PicsumService } from './picsum.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PicsumService', () => {
  let service: PicsumService;
  let httpMock: HttpTestingController;
  const imagesData = [
    {
      id: 1,
      size: {
        width: 1
      }
    },
    {
      id: 2,
      size: {
        width: 2,
        height: 2
      }
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PicsumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return image URL', () => {
    const expectedResult = [
      "https://picsum.photos/id/1/1",
      "https://picsum.photos/id/2/2/2"
    ];
    const results: string[] = [];

    imagesData.forEach(imageData => {
      results.push(service.getImageUrl(imageData.id, imageData.size));
    });

    expect(results).toEqual(expectedResult);
  });

  it('should return image blob', () => {
    const imageData = imagesData[0];
    
    
    service.getImage(imageData.id, imageData.size).subscribe(imageBlob => {
      expect(imageBlob).toBeDefined();
    });
    
    const req = httpMock.expectOne('https://picsum.photos/id/1/1');
    expect(req.request.method).toEqual("GET");
    req.flush(new Blob());

    httpMock.verify();
  });
});
