import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TriviaGameComponent } from '../trivia-game/trivia-game.component';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
})
export class EditMenuComponent {
  constructor(private http: HttpClient, private router: Router) {}
  posts: any[] = [];
  // loadPosts() {
  //   this.http
  //     .get('https://localhost:7151/api/TriviaGame/CreateQuestion', {})
  //     .subscribe((posts: any) => {
  //       this.posts = posts;
  //     });
  // }
  // createPost() {
  //   this.http
  //     .post('https://localhost:7151/api/TriviaGame/CreateQuestion', {
  //       // title: 'Hello world',
  //       // body: 'This is body',
  //     })
  //     .subscribe(
  //       (response: any) => {
  //         alert(JSON.stringify(response));
  //       },
  //       (error) => {
  //         alert(JSON.stringify(error));
  //       }
  //     );
  // }
  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
  btnAddQuestion() {
    this.router.navigateByUrl('add-question');
  }
}
