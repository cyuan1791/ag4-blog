import {MyUtil} from './myutil';
import {Http, Response} from '@angular/http';


import { Observable } from 'rxjs/Observable';
import {Injectable, Inject} from '@angular/core';
import {WindowRef} from './window-ref';


@Injectable()
export class BlogService {
  blogData = {
    activeId: 0,
    data: [
      {'title': '', 'imgUrl': '', 'desc': ''},
      /*{'title': 'title two', 'imgUrl': 'http://archive.webcmsd.com/images/mountains1386x554.jpg', 'desc': MyUtil.text()},
      {'title': 'title three', 'imgUrl': 'http://archive.webcmsd.com/images/sf_gate1440x350.jpg', 'desc': MyUtil.text()},*/
    ]
  }

  /*constructor(private http: Http, @Inject('dataURL') dataURL) {
    this.http.get(dataURL).subscribe(*/
  constructor(private http: Http, private winRef: WindowRef) {
    console.log(winRef.nativeWindow['myURL']);
    this.http.get('http://a.webcmsnow.com/getBlogData.php').subscribe(
    (res: Response) => {
      const data = res.json();
      this.blogData.activeId = data.activeId;
      this.blogData.data = data['data'];
    }
    );
  }
}
