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

    ngOnInit() : void {

     }
    getQuestion(question: ) {
      .createQuestion(question)
      .subscribe((questions : AddQuestion[]) => this.questionUpdated.emit(questions));
    }
}

