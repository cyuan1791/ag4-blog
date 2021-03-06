import {Http, Response} from '@angular/http';


/*
 import { Observable } from 'rxjs/Observable';
 */
import {Injectable, Inject} from '@angular/core';
import {WindowRef} from './window-ref';


@Injectable()
export class BlogService {
  blogData = {
    'prop': {
      activeId: 0,
      listStartMsg: ''
    },
    data: [
      {'title': '', 'imgUrl': '', 'desc': '', 'date': ''},
      /*{'title': 'title two', 'imgUrl': 'http://archive.webcmsd.com/images/mountains1386x554.jpg', 'desc': MyUtil.text()},
       {'title': 'title three', 'imgUrl': 'http://archive.webcmsd.com/images/sf_gate1440x350.jpg', 'desc': MyUtil.text()},*/
    ]
  }

  /*constructor(private http: Http, @Inject('dataURL') dataURL) {
   this.http.get(dataURL).subscribe(*/
  constructor(private http: Http, private winRef: WindowRef) {
    /*
     console.log(winRef.nativeWindow['myURL']);
     */
    this.http.get(winRef.nativeWindow['myURL']).subscribe(
      (res: Response) => {
        const data = res.json();
        this.blogData.prop = data.prop;
        this.blogData.data = data['data'];
        /*console.log(data);
         console.log(data['data']);*/
      }
    );
  }
}
