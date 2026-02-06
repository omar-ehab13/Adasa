import { IAuthor } from "./author.interface";

export interface IPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: IAuthor;
    image: string;
    date: string;
    readTime: string;
    featured: boolean;
    tags: string[];
}
