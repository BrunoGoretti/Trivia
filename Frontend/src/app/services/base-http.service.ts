import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environments/environment';
import { TriviaData } from 'src/app/models/trivia-data';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(private http: HttpClient) { }
  private url = "CreateQuestion";
  private randomQuestionUrl = "GetOneQuestion";

  public getQuestion() : Observable<TriviaData[]> {
   return this.http.get<TriviaData[]>(`${enviroments.apiUrl}/${this.url}`);
  }

  public getOneQuestion() : Observable<TriviaData[]> {
  //  return this.http.get<TriviaData[]>(`${enviroments.apiUrl}/${this.url}`);

   return this.http.get<TriviaData[]>(`${enviroments.apiUrl}/${this.randomQuestionUrl}`);
  }

   public createQuestion(question : TriviaData) : Observable<TriviaData[]> {
    return this.http.post<TriviaData[]>(
      `${enviroments.apiUrl}/${this.url}`,
      question);
   }

}
