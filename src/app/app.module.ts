import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import {BlogService} from './blog.service';

declare var dataURL: any;

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BlogService,
    {provide: 'dataURL', useValue: dataURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
