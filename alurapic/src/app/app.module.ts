import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhootosModule } from './photos/photos.module';
import { PhotoService } from './photos/photo/photo.service';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhootosModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
