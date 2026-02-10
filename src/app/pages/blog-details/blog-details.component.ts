import { Component, inject, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { IArticleSection } from '../../interfaces/article-section.interface';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  post !: IPost | undefined;
  suggestPosts !: IPost[];
  postService = inject(PostService)

  introText: string = '';
  sections: IArticleSection[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = this.postService.getPostBySlug(slug!);

    if (this.post) {
      this.parseContent(this.post.content);

      this.suggestPosts = this.postService.getRandomPosts(
        3,
        [this.post.id]
      );
    }

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          el?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      }
    });
  }


  private parseContent(content: string) {
    // قسم المحتوى على أساس ## 
    const parts = content.split('\n\n## ');

    // أول جزء = المقدمة
    this.introText = parts.shift() ?? '';

    this.sections = parts.map((part, index) => {
      const [title, ...body] = part.split('\n\n');

      return {
        id: `section-${index}`,
        title: title.trim(),
        content: body.join('\n\n').trim(),
      };
    });
  }

}
