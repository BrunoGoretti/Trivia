import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TriviaData } from 'src/app/models/trivia-data';
import { BaseHttpService } from 'src/app/services/base-http.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  @Input() question?: TriviaData;
  @Output() questionsUpdated = new EventEmitter<TriviaData[]>();
  constructor(private addBaseHttpService: BaseHttpService) {}
  ngOnInit(): void {}

  createQuestion(question: TriviaData) {
    this.addBaseHttpService
      .createQuestion(question)
      .subscribe((heroes: TriviaData[]) => this.questionsUpdated.emit(heroes));
  }
}
