import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  posts = this.service.getList();

  constructor(private service: PostsService) { }
}
