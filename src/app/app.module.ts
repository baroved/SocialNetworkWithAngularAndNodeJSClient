import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { FilterComponent } from './filter/filter.component';
import { BarComponent } from './bar/bar.component';
import { FiltersComponent } from './filters/filters.component';
import { UploadPostComponent } from './upload-post/upload-post.component';

import { MapComponent } from './map/map.component';
import { CommentsComponent } from './comments/comments.component';
import { LikesComponent } from './likes/likes.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { LikesModalComponent } from './likes-modal/likes-modal.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    RegisterComponent,
    FilterComponent,
    BarComponent,
    FiltersComponent,
    UploadPostComponent,
    MapComponent,
    CommentsComponent,
    LikesComponent,
    CommentsModalComponent,
    LikesModalComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
