import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogDataL: any;

  constructor(private blogService: BlogService) {
    this.blogDataL = blogService.blogData;
  }

  ngOnInit() {
  }
  selectId(id: number) {
    this.blogService.blogData.activeId = id;
  }
}
