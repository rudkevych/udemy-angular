import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { NgControlStatus } from '@angular/forms';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    console.log(title, content);
    const postData: Post = { title, content };
    this.http.post<{ name: string }>
      ('https://udemy-course-e856d.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>('https://udemy-course-e856d.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello Oksana'}),
        params: searchParams
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }));
  }

  deletePosts() {
    return this.http.delete(
      'https://udemy-course-e856d.firebaseio.com/posts.json',
      {
        observe: 'events'
      }).pipe(tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent) {
          console.log('hey');
        }
      }));
  }

}


