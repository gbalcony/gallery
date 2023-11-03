import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ImageService } from 'src/app/core/services/image.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  // const imageService = {
  //   getImages(numberOfImages: number) {

  //   }
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent,
        SearchBarComponent,
        SearchFilterPipe
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ScrollingModule,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <img>', fakeAsync(() => {
    finishInit(fixture);
    // fixture.autoDetectChanges();
    const galleryElement: HTMLElement = fixture.nativeElement;
    const images = galleryElement.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
  }));
});

/** Finish initializing the virtual scroll component at the beginning of a test. */
function finishInit(fixture: ComponentFixture<any>) {
  // On the first cycle we render and measure the viewport.
  fixture.detectChanges();
  flush();

  // On the second cycle we render the items.
  fixture.detectChanges();
  flush();
}