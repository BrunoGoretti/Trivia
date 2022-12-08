import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddQuestion } from 'src/app/models/question-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddQuestionService } from 'src/app/services/add-question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{

  questions: AddQuestion[] = [];
  title = 'AddQuestion.UI';
  QuestionToEdit? : AddQuestion;

  @Input() question?: AddQuestion;
  @Output() questionUpdated = new EventEmitter<AddQuestion[]>();
  constructor(private http: HttpClient, private router: Router,
    private addQuestionService: AddQuestionService) { }
  ngOnInit() : void {
    this.addQuestionService
    .getQuestion()
    .subscribe((result: AddQuestion[]) => (this.questions = result));
     }
    //  createQuestion(question: AddQuestion) {
    //   this.addQuestionService
    //   .createQuestion(question)
    //   .subscribe((questions : AddQuestion[]) => this.questionUpdated.emit(questions));
    // }

      updateQuestionList(questions: AddQuestion[]){
        this.questions = questions;
      }

      // initNewHero(){
      //   this.QuestionToEdit = new AddQuestion();
      // }
}
