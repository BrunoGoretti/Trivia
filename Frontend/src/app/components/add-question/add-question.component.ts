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
  @Input() question?: AddQuestion;
  @Output() questionUpdated = new EventEmitter<AddQuestion[]>();
  constructor(private http: HttpClient, private router: Router,
    private addQuestionService: AddQuestionService) { }
  ngOnInit() : void {

     }

     createQuestion(question: AddQuestion) {
      this.addQuestionService
      .createQuestion(question)
      .subscribe((questions : AddQuestion[]) => this.questionUpdated.emit(questions));
    }
}
