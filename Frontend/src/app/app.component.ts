import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddQuestion } from 'src/app/models/question-model';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
  title = 'TriviaGame.UI';
  questions:
=======
=======
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
=======
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
  title = 'AddQuestion.UI';
  questions: AddQuestion[] = [];

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
    }
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
=======
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
>>>>>>> Stashed changes
}
