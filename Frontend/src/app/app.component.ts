import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddQuestion } from 'src/app/models/question-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AddQuestion.UI';
  questions: AddQuestion[] = [];

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
    }
  //  posts: any[] = [];
  // loadPosts() {
  //   this.http
  //   .get('https://localhost:7151/api/TriviaGame/CreateQuestion', {})
  //   .subscribe((posts: any) => {
  //      this.posts = posts;
  //   });
  // }
  // createPost() {
  //   this.http.post('https://localhost:7151/api/TriviaGame/CreateQuestion', {
  //   }).subscribe(
  //     (response: any) => {
  //       alert(JSON.stringify(response));
  //     },
  //    (error) => {
  //     alert(JSON.stringify(error));
  //   }
  //   );
  // }

  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
}
