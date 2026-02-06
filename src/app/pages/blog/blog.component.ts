import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-blog',
  imports: [CardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  posts : IPost[] = [];
  filteredPosts : IPost[] = [];
  viewMode : 'grid' | 'list' = 'grid';

  searchTerm : string = '';
  selectedCategory : string = 'all';
  categories : string[] = ['all', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

  @ViewChild('searchInput') searchInput !: ElementRef<HTMLInputElement>

  constructor(private postService : PostService) {

  }

  ngOnInit(): void {
    this.posts = this.postService.getPostsData();
    this.filteredPosts = this.posts;
  }

  applyFilters() {
    this.searchTerm = this.searchInput.nativeElement.value;
    // console.log(`I am here and ther search term is ${this.searchTerm} and category is ${this.selectedCategory}`)
    this.filteredPosts = this.posts.filter(post => {

      // check if the current post matches according to the search term
      const matchesSearch = 
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase());

      // check if the current post matches according to the category
      const matchesCategory = this.selectedCategory === 'all' || this.selectedCategory === post.category;

      return matchesSearch && matchesCategory;
    });
  }
}
