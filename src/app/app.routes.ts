import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'عدسة عالم التصوير' },
    { path: 'home', redirectTo: '' },
    { path: 'blog', component: BlogComponent, title: 'عدسة عالم التصوير' },
    { path: 'blog/:slug', component: BlogDetailsComponent },
    { path: 'about', component: AboutComponent, title: 'عدسة عالم التصوير' },
    { path: '**', component: NotFoundComponent }
];
