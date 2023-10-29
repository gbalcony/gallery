import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { GalleryComponent } from './features/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
