import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent{
  @Input() post !: IPost;
  @Input() viewMode: 'grid' | 'list' = 'grid';
}
