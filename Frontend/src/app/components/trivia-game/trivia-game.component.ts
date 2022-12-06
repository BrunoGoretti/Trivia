import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent {
    constructor(private http: HttpClient){}
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
  }

