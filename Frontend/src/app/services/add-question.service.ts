import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environments/environment';
import { TriviaData } from 'src/app/models/trivia-data';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  constructor(private http: HttpClient) { }
  private url = "CreateQuestion";

  public getQuestion() : Observable<TriviaData[]> {
   return this.http.get<TriviaData[]>(`${enviroments.apiUrl}/${this.url}`);
  }

   public createQuestion(question : TriviaData) : Observable<TriviaData[]> {

    return this.http.post<TriviaData[]>(
      `${enviroments.apiUrl}/${this.url}`,
      question);
   }

  //  public deleteSuperHero(hero : AddQuestion) : Observable<AddQuestion[]> {

  //   return this.http.delete<AddQuestion[]>(
  //     `${enviroments.apiUrl}/${this.url}/${hero.id}`
  //     );
  //  }
}
