import { Observable } from "rxjs";
import { Post } from "../models/post";

export abstract class PostsData {
    abstract getData(): Observable<Post>[];
  }
  