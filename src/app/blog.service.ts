import {MyUtil} from './myutil';

export class BlogService {
  blogData = {
    activeId: 0,
    data: [
      {'title': 'title one', 'imgUrl': 'http://archive.webcmsd.com/images/bridge-1440x750.jpg', 'desc': MyUtil.text()},
      {'title': 'title two', 'imgUrl': 'http://archive.webcmsd.com/images/mountains1386x554.jpg', 'desc': MyUtil.text()},
      {'title': 'title three', 'imgUrl': 'http://archive.webcmsd.com/images/sf_gate1440x350.jpg', 'desc': MyUtil.text()},
    ]
  }

  constructor() { }

}
