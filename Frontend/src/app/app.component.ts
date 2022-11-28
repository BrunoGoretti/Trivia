import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, private router: Router){}
   posts: any[] = [];
  loadPosts() {
    this.http
    .get('https://localhost:7151/api/TriviaGame/CreateQuestion', {})
    .subscribe((posts: any) => {
       this.posts = posts;
    });
  }
  createPost() {
    this.http.post('https://localhost:7151/api/TriviaGame/CreateQuestion', {
    }).subscribe(
      (response: any) => {
        alert(JSON.stringify(response));
      },
     (error) => {
      alert(JSON.stringify(error));
    }
    );
  }
  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
}
