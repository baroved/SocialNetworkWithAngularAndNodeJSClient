import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { FiltersComponent } from './filters/filters.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { MapComponent } from './map/map.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'filters',
    component: FiltersComponent,
    children:[
      {
        path: '',
        redirectTo:"posts",
        pathMatch:"full"
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'uploadPost',
        component: UploadPostComponent
      },
    ]
  },
  {
    path: 'uploadPost',
    component: UploadPostComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
