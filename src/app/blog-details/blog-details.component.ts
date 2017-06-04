import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogDataD: any;

  constructor(private blogService: BlogService) {
    this.blogDataD = blogService.blogData;
  }

  ngOnInit() {
  }

  activeId() {
    return this.blogDataD.activeID;
  }
}
