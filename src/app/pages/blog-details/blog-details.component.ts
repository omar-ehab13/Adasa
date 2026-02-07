import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  post !: IPost | undefined;
  suggestPosts !: IPost[];

  constructor(private route: ActivatedRoute, private postService: PostService){

  }
  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = this.postService.getPostBySlug(slug!);
    console.log(this.post);
    if (this.post)
      this.suggestPosts = this.postService.getRandomPosts(3, [this.post!.id]);
  }
}
