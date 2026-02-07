import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
import { SectionLabelComponent } from "../../components/section-label/section-label.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [SectionLabelComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  posts !: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getRandomPosts(3);
  }
}
