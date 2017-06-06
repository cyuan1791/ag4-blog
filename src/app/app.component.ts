import {Component, Inject} from '@angular/core';
import {BlogService} from './blog.service';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private blogService: BlogService) {

  }
}
