import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaData } from 'src/app/models/trivia-data';
import { BaseHttpService } from 'src/app/services/base-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AddQuestion.UI';
  questions: TriviaData[] = [];

  constructor(private addBaseHttpService: BaseHttpService,
    private http: HttpClient, private router: Router){}
    ngOnInit() : void {
    this.addBaseHttpService
    .getQuestion()
    }

  btnClick() {
    this.router.navigateByUrl('trivia-game');
  }
}
