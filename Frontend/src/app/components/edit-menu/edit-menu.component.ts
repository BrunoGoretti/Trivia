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
<<<<<<< HEAD
  constructor(private http: HttpClient, private router: Router) {}
  posts: any[] = [];
  
=======
  questions: AddQuestion[] = [];
  title = 'AddQuestion.UI';
  QuestionToEdit? : AddQuestion;

  constructor(private addQuestionService: AddQuestionService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
    }

    updateQuestionList(questions: AddQuestion[]){
      this.questions = questions;
    }

    initNewHero(){
      this.QuestionToEdit = new AddQuestion();
    }

<<<<<<< HEAD
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
=======
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)
  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
  btnAddQuestion() {
    this.router.navigateByUrl('add-question');
  }

}
