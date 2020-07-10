import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Search } from '../Models/Search';
import { Subject } from 'rxjs';
import { FilterPostsService } from '../services/filtersPosts/filter-posts.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  search: Search;


  constructor(private postService: PostService, private filtersPosts: FilterPostsService) {
    this.search = new Search();
  }

  ngOnInit() { }

  onSearch() {
    this.postService.GetPostsByPublisher(this.search.Publisher)
      .subscribe(res => {
        this.filtersPosts.getPostsByPublisher(res.data);
      });
  }

}
