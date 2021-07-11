import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsData } from '../interfaces/posts-data';
import { Post } from '../models/post';

@Injectable()
export class PostService extends PostsData {

    getData(): Observable<Post>[] {
        throw new Error('Method not implemented.');
    }
    
}